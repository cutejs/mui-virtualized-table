'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcColumnWidth = calcColumnWidth;
function calcColumnWidth(index, columns, tableWidth) {
  var column = columns[index];

  var width = getDeterministicColumnWidth(column, tableWidth);

  if (width) {
    return width;
  }

  var totalAllocatedWidth = columns.reduce(function (result, c) {
    return result + (getDeterministicColumnWidth(c, tableWidth) || 0);
  }, 0);

  // Evenly distribute remaining width amoungst columns (accounting for minWidths)
  var variableWidthColumns = columns.filter(function (c) {
    return typeof c.width !== 'number' && typeof c.width !== 'string';
  });
  var initialDistributedWidthPerColumn = (tableWidth - totalAllocatedWidth) / variableWidthColumns.length;
  var activeMinWidthColumns = variableWidthColumns.filter(function (c) {
    return c.minWidth > initialDistributedWidthPerColumn ? c.minWidth : 0;
  });
  var allocatedMinWidth = activeMinWidthColumns.reduce(function (result, c) {
    return result + c.minWidth;
  }, 0);
  var remainingWidth = tableWidth - totalAllocatedWidth - allocatedMinWidth;

  return Math.max(column.minWidth || 0, remainingWidth / (variableWidthColumns.length - activeMinWidthColumns.length));
}

function getDeterministicColumnWidth(column, tableWidth) {
  if (typeof column.width === 'number') {
    // Fixed width
    return column.width;
  } else if (typeof column.width === 'string') {
    // Percentage width
    var percentageBasedWidth = percentToFixedWidth(column.width, tableWidth);
    return Math.max(percentageBasedWidth, column.minWidth || 0);
  } else {
    // Variable width
    return null;
  }
}

function percentToFixedWidth(percentAsString, tableWidth) {
  return parseFloat(percentAsString) / 100 * tableWidth;
}