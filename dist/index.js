'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MultiGrid = require('react-virtualized/dist/commonjs/MultiGrid');

var _MultiGrid2 = _interopRequireDefault(_MultiGrid);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Table = require('@material-ui/core/Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = require('@material-ui/core/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require('@material-ui/core/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableFooter = require('@material-ui/core/TableFooter');

var _TableFooter2 = _interopRequireDefault(_TableFooter);

var _TablePagination = require('@material-ui/core/TablePagination');

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _TableSortLabel = require('@material-ui/core/TableSortLabel');

var _TableSortLabel2 = _interopRequireDefault(_TableSortLabel);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FOOTER_BORDER_HEIGHT = 1;

var styles = exports.styles = function styles(theme) {
  return {
    table: {
      boxSizing: 'border-box',
      border: '1px solid ' + theme.palette.text.lightDivider,

      '& .topLeftGrid': {
        backgroundColor: theme.palette.grey['200'],
        borderBottom: '2px solid ' + theme.palette.divider,
        borderRight: '2px solid ' + theme.palette.divider,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(12),

        // Hide scrollbars on Chrome/Safari/IE
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none'
      },

      '& .topRightGrid': {
        backgroundColor: theme.palette.grey['200'],
        borderBottom: '2px solid ' + theme.palette.divider,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(12),

        // Hide scrollbars on Chrome/Safari/IE
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none'
      },

      '& .bottomLeftGrid': {
        backgroundColor: theme.palette.grey['200'],
        borderRight: '2px solid ' + theme.palette.divider,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(13),

        // Hide scrollbars on Chrome/Safari/IE
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none'
      },

      '& .bottomRightGrid': {
        color: theme.palette.text.primary,
        fontSize: theme.typography.pxToRem(13),
        outline: 'none' // See: https://github.com/bvaughn/react-virtualized/issues/381
      }
    },
    cell: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center'
      // borderRight: `1px solid ${theme.palette.text.lightDivider}`,
    },
    cellSelected: {
      backgroundColor: theme.palette.grey[100]
    },
    cellHovered: {
      backgroundColor: theme.palette.grey[200]
    },
    cellContents: {
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    cellHeader: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary
    },
    cellInLastColumn: {
      paddingRight: theme.spacing.unit * 3
    },
    cellInLastRow: {
      borderBottom: 'none'
    },
    footer: {
      borderTop: FOOTER_BORDER_HEIGHT + 'px solid ' + theme.palette.divider
    },
    dragHandle: {
      flex: '0 0 16px',
      zIndex: 2,
      cursor: 'col-resize',
      color: '#0085ff'
    },
    DragHandleActive: {
      color: '#0b6fcc',
      zIndex: 3
    },
    DragHandleIcon: {
      flex: '0 0 12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
};

var MuiTable = function (_Component) {
  _inherits(MuiTable, _Component);

  function MuiTable(props) {
    _classCallCheck(this, MuiTable);

    var _this = _possibleConstructorReturn(this, (MuiTable.__proto__ || Object.getPrototypeOf(MuiTable)).call(this, props));

    _initialiseProps.call(_this);

    var widths = {};
    if (props.resizable) {
      var initialWidth = 1;
      var columns = [];
      props.columns.forEach(function (c) {
        if (c.width) {
          widths[c.name] = 0.1;
          initialWidth = initialWidth - 0.1;
        } else {
          columns.push(c);
        }
      });
      columns.forEach(function (c) {
        widths[c.name] = initialWidth / columns.length;
      });
    }
    _this.state = {
      hoveredColumn: null,
      hoveredRowData: null,
      widths: widths
    };
    return _this;
  }

  _createClass(MuiTable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.width !== this.props.width || nextProps.columns !== this.props.columns) {
        this.multiGrid.recomputeGridSize();
      }
    }
  }, {
    key: 'resizableColumnWidths',
    value: function resizableColumnWidths(index, columns, tableWidth) {
      var column = columns[index];
      return this.state.widths[column.name] * this.props.width;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          columns = _props.columns,
          width = _props.width,
          height = _props.height,
          maxHeight = _props.maxHeight,
          pagination = _props.pagination,
          fitHeightToRows = _props.fitHeightToRows,
          fixedRowCount = _props.fixedRowCount,
          fixedColumnCount = _props.fixedColumnCount,
          rowHeight = _props.rowHeight,
          columnWidth = _props.columnWidth,
          includeHeaders = _props.includeHeaders,
          headerRowRenderer = _props.headerRowRenderer,
          classes = _props.classes,
          orderBy = _props.orderBy,
          orderDirection = _props.orderDirection,
          onHeaderClick = _props.onHeaderClick,
          onCellClick = _props.onCellClick,
          isCellHovered = _props.isCellHovered,
          isCellSelected = _props.isCellSelected,
          cellProps = _props.cellProps,
          style = _props.style,
          theme = _props.theme,
          resizable = _props.resizable,
          props = _objectWithoutProperties(_props, ['data', 'columns', 'width', 'height', 'maxHeight', 'pagination', 'fitHeightToRows', 'fixedRowCount', 'fixedColumnCount', 'rowHeight', 'columnWidth', 'includeHeaders', 'headerRowRenderer', 'classes', 'orderBy', 'orderDirection', 'onHeaderClick', 'onCellClick', 'isCellHovered', 'isCellSelected', 'cellProps', 'style', 'theme', 'resizable']);

      var calculatedHeight = 0;
      if (height) {
        calculatedHeight = height; // fixed height
      } else if (pagination && pagination.rowsPerPage && !fitHeightToRows) {
        var rowCount = pagination.rowsPerPage + (fixedRowCount ? fixedRowCount : includeHeaders ? 1 : 0);
        calculatedHeight = rowCount * rowHeight;
      } else if (Array.isArray(data)) {
        var _rowCount = data.length + (fixedRowCount ? fixedRowCount : includeHeaders ? 1 : 0);
        calculatedHeight = _rowCount * rowHeight;
      }

      var paginationHeight = theme.mixins.toolbar.minHeight + FOOTER_BORDER_HEIGHT;

      var calculatedHeightWithFooter = calculatedHeight + (pagination ? paginationHeight : 0);
      var containerHeight = maxHeight != null ? Math.min(calculatedHeightWithFooter, maxHeight) : calculatedHeightWithFooter;
      var multiGridHeight = containerHeight - (pagination ? paginationHeight : 0);

      return _react2.default.createElement(
        _Table2.default,
        _extends({
          component: 'div',
          style: _extends({ width: width, height: containerHeight }, style),
          className: classes.table
        }, props),
        _react2.default.createElement(_MultiGrid2.default, {
          cellRenderer: this.cellRenderer,
          headerRowRenderer: headerRowRenderer,
          ref: function ref(el) {
            return _this2.multiGrid = el;
          },
          width: width,
          columnWidth: columnWidth || resizable ? function (_ref) {
            var index = _ref.index;
            return _this2.resizableColumnWidths(index, columns, width);
          } : function (_ref2) {
            var index = _ref2.index;
            return (0, _utils.calcColumnWidth)(index, columns, width);
          },
          columnCount: Array.isArray(columns) ? columns.length : 0,
          fixedColumnCount: fixedColumnCount,
          enableFixedColumnScroll: fixedColumnCount > 0,
          height: multiGridHeight,
          rowHeight: rowHeight,
          rowCount: Array.isArray(data) ? data.length + (includeHeaders ? 1 : 0) : 0,
          fixedRowCount: fixedRowCount,
          enableFixedRowScroll: fixedRowCount > 0
          // TODO: Read tehse from `classes` without classes.table inherirtance?  How to pass props.classes down to override?
          , classNameTopLeftGrid: 'topLeftGrid',
          classNameTopRightGrid: 'topRightGrid',
          classNameBottomLeftGrid: 'bottomLeftGrid',
          classNameBottomRightGrid: 'bottomRightGrid'
        }),
        pagination && _react2.default.createElement(
          _TableFooter2.default,
          { component: 'div', className: classes.footer },
          _react2.default.createElement(_TablePagination2.default, _extends({ component: 'div' }, pagination))
        )
      );
    }
  }]);

  return MuiTable;
}(_react.Component);

MuiTable.propTypes = {
  width: _propTypes2.default.number.isRequired
};
MuiTable.defaultProps = {
  rowHeight: 48,
  maxHeight: null,
  includeHeaders: false,
  fixedRowCount: 0,
  fixedColumnCount: 0
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.resizeRow = function (_ref3) {
    var dataKey = _ref3.dataKey,
        deltaX = _ref3.deltaX;
    return _this3.setState(function (prevState) {
      var _extends2;

      var prevWidths = prevState.widths;
      var percentDelta = deltaX / _this3.props.width;
      var columns = _this3.props.columns;
      var index = columns.findIndex(function (c) {
        return c.name === dataKey;
      });
      var nextDataKey = columns[index + 1].name;
      return {
        widths: _extends({}, prevWidths, (_extends2 = {}, _defineProperty(_extends2, dataKey, prevWidths[dataKey] + percentDelta), _defineProperty(_extends2, nextDataKey, prevWidths[nextDataKey] - percentDelta), _extends2))
      };
    }, function () {
      _this3.multiGrid.recomputeGridSize();
    });
  };

  this.cellRenderer = function (_ref4) {
    var _classNames;

    var columnIndex = _ref4.columnIndex,
        rowIndex = _ref4.rowIndex,
        key = _ref4.key,
        style = _ref4.style;
    var _props2 = _this3.props,
        data = _props2.data,
        columns = _props2.columns,
        includeHeaders = _props2.includeHeaders,
        isCellHovered = _props2.isCellHovered,
        isCellSelected = _props2.isCellSelected,
        classes = _props2.classes,
        orderBy = _props2.orderBy,
        orderDirection = _props2.orderDirection,
        onHeaderClick = _props2.onHeaderClick,
        onCellClick = _props2.onCellClick,
        resizable = _props2.resizable,
        defaultCellProps = _props2.cellProps;
    var _state = _this3.state,
        hoveredColumn = _state.hoveredColumn,
        hoveredRowData = _state.hoveredRowData;


    var column = columns[columnIndex];
    var isHeader = includeHeaders && rowIndex === 0;
    var headerOffset = includeHeaders ? 1 : 0;
    var rowData = data && data[rowIndex - headerOffset] || {};

    var isSelected = isCellSelected && isCellSelected(column, rowData);

    var isHovered = hoveredColumn && hoveredRowData && isCellHovered && isCellHovered(column, rowData, hoveredColumn, hoveredRowData);

    var resolveCellProps = function resolveCellProps(cellProps) {
      return typeof cellProps === 'function' ? cellProps(column, rowData, hoveredColumn, hoveredRowData) : cellProps;
    };
    // TODO: Deep merge (do not override all defaultCellProps styles if column.cellProps.styles defined?)

    var _resolveCellProps$res = _extends({}, resolveCellProps(defaultCellProps), resolveCellProps(column.cellProps)),
        cellStyle = _resolveCellProps$res.style,
        cellProps = _objectWithoutProperties(_resolveCellProps$res, ['style']);

    var contents = _react2.default.createElement(
      'div',
      { className: classes.cellContents },
      _react2.default.createElement(
        'span',
        { style: { flex: 'auto' } },
        isHeader ? column.header != null ? column.header : column.name : column.cell ? column.cell(rowData) : rowData[column.name]
      ),
      _react2.default.createElement(
        'span',
        { style: { float: 'right' } },
        isHeader && resizable && columnIndex < columns.length - 1 && _react2.default.createElement(
          _reactDraggable2.default,
          {
            axis: 'x',
            defaultClassName: classes.dragHandle,
            defaultClassNameDragging: classes.DragHandleActive,
            onDrag: function onDrag(event, _ref5) {
              var deltaX = _ref5.deltaX;
              return _this3.resizeRow({
                dataKey: column.name,
                deltaX: deltaX
              });
            },
            position: { x: 0 },
            zIndex: 999
          },
          _react2.default.createElement(
            'span',
            { className: classes.DragHandleIcon },
            '\u22EE'
          )
        )
      )
    );

    var className = (0, _classnames2.default)(classes.cell, (_classNames = {}, _defineProperty(_classNames, classes.cellHovered, isHovered), _defineProperty(_classNames, classes.cellSelected, isSelected), _defineProperty(_classNames, classes.cellHeader, isHeader), _defineProperty(_classNames, classes.cellInLastColumn, columnIndex === columns.length - 1), _defineProperty(_classNames, classes.cellInLastRow, rowIndex === (data ? data.length : 0)), _classNames));

    var hasCellClick = !isHeader && onCellClick;

    return _react2.default.createElement(
      _TableCell2.default,
      _extends({
        component: 'div',
        className: className,
        key: key,
        onMouseEnter: function onMouseEnter() {
          _this3.setState({ hoveredColumn: column, hoveredRowData: rowData });
        },
        onMouseLeave: function onMouseLeave() {
          return _this3.setState({ hoveredColumn: null, hoveredRowData: null });
        },
        style: _extends({}, style, cellStyle, (hasCellClick || column.onClick) && { cursor: 'pointer' })
      }, hasCellClick && {
        onClick: function onClick() {
          return onCellClick(column, rowData);
        }
      }, cellProps),
      isHeader && column.onHeaderClick !== false && (column.onHeaderClick || onHeaderClick) ? _react2.default.createElement(
        _TableSortLabel2.default,
        {
          active: orderBy && (orderBy === column.name || orderBy === column.orderBy) && rowIndex === 0,
          style: { width: 'inherit' } // fix text overflowing
          , direction: orderDirection,
          onClick: function onClick() {
            return column.onHeaderClick ? column.onHeaderClick() : onHeaderClick(column);
          }
        },
        contents
      ) : isHeader && column.resizable ? _react2.default.createElement(
        _react2.default.Fragment,
        null,
        contents,
        _react2.default.createElement(
          _reactDraggable2.default,
          {
            axis: 'x',
            defaultClassName: 'DragHandle',
            defaultClassNameDragging: 'DragHandleActive',
            onDrag: function onDrag(event, _ref6) {
              var deltaX = _ref6.deltaX;
              return _this3.resizeRow({
                dataKey: dataKey,
                deltaX: deltaX
              });
            },
            position: { x: 0 },
            zIndex: 999
          },
          _react2.default.createElement(
            'span',
            { className: 'DragHandleIcon' },
            '\u22EE'
          )
        )
      ) : contents
    );
  };
};

MuiTable.propTypes = {
  data: _propTypes2.default.array,
  columns: _propTypes2.default.array,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  maxHeight: _propTypes2.default.number,
  pagination: _propTypes2.default.object,
  fitHeightToRows: _propTypes2.default.bool,
  fixedRowCount: _propTypes2.default.number,
  fixedColumnCount: _propTypes2.default.number,
  rowHeight: _propTypes2.default.number,
  columnWidth: _propTypes2.default.number,
  includeHeaders: _propTypes2.default.bool,
  orderBy: _propTypes2.default.string,
  orderDirection: _propTypes2.default.string,
  onHeaderClick: _propTypes2.default.func,
  onCellClick: _propTypes2.default.func,
  isCellHovered: _propTypes2.default.func,
  isCellSelected: _propTypes2.default.func,
  classes: _propTypes2.default.object,
  cellProps: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  style: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(MuiTable);