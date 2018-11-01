export function calcColumnWidth(index, columns, tableWidth) {
  const column = columns[index];

  let width = getDeterministicColumnWidth(column, tableWidth);

  if (width) {
    return width;
  }

  const totalAllocatedWidth = columns.reduce(
    (result, c) => result + (getDeterministicColumnWidth(c, tableWidth) || 0),
    0
  );

  // Evenly distribute remaining width amoungst columns (accounting for minWidths)
  const variableWidthColumns = columns.filter(
    c => typeof c.width !== 'number' && typeof c.width !== 'string'
  );
  const initialDistributedWidthPerColumn =
    (tableWidth - totalAllocatedWidth) / variableWidthColumns.length;
  const activeMinWidthColumns = variableWidthColumns.filter(
    c => (c.minWidth > initialDistributedWidthPerColumn ? c.minWidth : 0)
  );
  const allocatedMinWidth = activeMinWidthColumns.reduce(
    (result, c) => result + c.minWidth,
    0
  );
  const remainingWidth = tableWidth - totalAllocatedWidth - allocatedMinWidth;

  return Math.max(
    column.minWidth || 0,
    remainingWidth /
      (variableWidthColumns.length - activeMinWidthColumns.length)
  );
}

function getDeterministicColumnWidth(column, tableWidth) {
  if (typeof column.width === 'number') {
    // Fixed width
    return column.width;
  } else if (typeof column.width === 'string') {
    // Percentage width
    const percentageBasedWidth = percentToFixedWidth(column.width, tableWidth);
    return Math.max(percentageBasedWidth, column.minWidth || 0);
  } else {
    // Variable width
    return null;
  }
}

function percentToFixedWidth(percentAsString, tableWidth) {
  return (parseFloat(percentAsString) / 100) * tableWidth;
}
export function getHeaders(columns) {
  const maxDepth = getDepth(columns, 'columns');
  const result = Array.from({ length: maxDepth }).map(i => []);
   function addItems (columns, depth) {
    columns.forEach(column => {
      const columnDef = { ...column };
      delete columnDef.columns;
       if (column.columns) {
        const colSpan = getWidth(column, 'columns');
        if (colSpan > 1) {
          columnDef.colSpan = colSpan;
          for (let i = 1; i < colSpan; i++) {
            result[depth].push(null);
          }
        }
        addItems(column.columns, depth + 1);
      } else {
        const rowSpan = maxDepth - depth;
        if (rowSpan > 1) {
          columnDef.rowSpan = maxDepth - depth;
          for (let i = 1; i < rowSpan; i++) {
            result[i].push(null);
          }
        }
      }
      result[depth].push(columnDef);
    });
  }
  addItems(columns, 0);
   return result;
}
 export function getColumns(columns) {
  const result = [];
   function setColumns(column) {
    if (column.columns == null) {
      result.push(column);
      return;
    }
     column.columns.forEach(child => setColumns(child));
  }
  columns.forEach(column => setColumns(column));
   return result;
}
 export function getDepth(arr, childProp = 'columns') {
  if (arr == null) {
    return 0;
  }
   let depth = 0;
  arr.forEach(item => {
    depth = Math.max(depth, getDepth(item[childProp], childProp));
  });
   return depth + 1;
}
 export function getWidth(item, childProp = 'columns') {
  if (item[childProp] == null) {
    return 1;
  }
   let width = 0;
  item[childProp].forEach(child => {
    width += getWidth(child, childProp);
  });
   return width;
}
