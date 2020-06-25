'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProjectRoutes = require('./Routes/ProjectRoutes');

var _ProjectRoutes2 = _interopRequireDefault(_ProjectRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// middlewards
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.json());
app.use('/api', _ProjectRoutes2.default);
module.exports = app;