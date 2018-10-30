'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('calcColumnWidth', function () {
  it('single column should equal table width', function () {
    var columns = [{ name: 'name' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(tableWidth);
  });

  it('two columns should split table width equally (half)', function () {
    var columns = [{ name: 'firstName' }, { name: 'lastName' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(tableWidth / 2);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(tableWidth / 2);
  });

  it('three columns should split table width equally (thirds)', function () {
    var columns = [{ name: 'firstName' }, { name: 'middleName' }, { name: 'lastName' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(tableWidth / 3);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(tableWidth / 3);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(tableWidth / 3);
  });

  it('single fixed column should allocate remaining widths to other non-fixed width columns', function () {
    var columns = [{ name: 'firstName', width: 100 }, { name: 'middleName' }, { name: 'lastName' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(100);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(200);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(200);
  });

  it('multiple fixed columns should allocate remaining widths to other non-fixed width columns', function () {
    var columns = [{ name: 'firstName', width: 100 }, { name: 'middleName', width: 100 }, { name: 'lastName' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(100);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(100);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(300);
  });

  it('column w/ minWidth defined that is smaller than distributed width should receive distributed width', function () {
    var columns = [{ name: 'firstName', minWidth: 100 }, { name: 'middleName' }, { name: 'lastName' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(tableWidth / 3);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(tableWidth / 3);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(tableWidth / 3);
  });

  it('column w/ minWidth defined that is larger than distributed width should receive minWidth value', function () {
    var columns = [{ name: 'firstName', minWidth: 100 }, { name: 'middleName' }, { name: 'lastName' }];
    var tableWidth = 200;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(100);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(50);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(50);
  });

  it('should support columns with percentage based widths', function () {
    var columns = [{ name: 'firstName', width: '50%' }, { name: 'middleName' }, { name: 'lastName' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(250);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(125);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(125);
  });

  it('should distribute remaining width to undeclared columns when other columns use width and minWidth', function () {
    var columns = [{ name: 'firstName', width: '50%' }, { name: 'middleName', minWidth: 150 }, { name: 'lastName' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(250);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(150);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(100);
  });

  it('should use minWidth over percentage width when larger', function () {
    var columns = [{ name: 'firstName', width: '50%', minWidth: 300 }, { name: 'middleName' }, { name: 'lastName' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(300);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(100);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(100);
  });

  it('should allow percentage widths to exceed table width (viewport) to support horizontal scrolling', function () {
    var columns = [{ name: 'firstName', width: '50%' }, { name: 'middleName', width: '50%' }, { name: 'lastName', width: '50%' }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(250);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(250);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(250);
  });

  it('should allow fixed widths to exceed table width (viewport) to support horizontal scrolling', function () {
    var columns = [{ name: 'firstName', width: 200 }, { name: 'middleName', width: 200 }, { name: 'lastName', width: 200 }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(200);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(200);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(200);
  });

  it('should allow minWidths to exceed table width (viewport) to support horizontal scrolling', function () {
    var columns = [{ name: 'firstName', minWidth: 200 }, { name: 'middleName', minWidth: 200 }, { name: 'lastName', minWidth: 200 }];
    var tableWidth = 500;
    expect((0, _utils.calcColumnWidth)(0, columns, tableWidth)).toBe(200);
    expect((0, _utils.calcColumnWidth)(1, columns, tableWidth)).toBe(200);
    expect((0, _utils.calcColumnWidth)(2, columns, tableWidth)).toBe(200);
  });
});