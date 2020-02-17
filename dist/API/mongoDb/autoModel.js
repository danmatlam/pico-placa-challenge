"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autoModel = new _mongoose.default.Schema({
  placa: String
});

var _default = _mongoose.default.model('auto', autoModel);

exports.default = _default;