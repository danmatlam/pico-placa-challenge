"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var consultaModel = new _mongoose.default.Schema({
  placa: String,
  fecha: String,
  hora: String,
  isLocked: Boolean
});

var _default = _mongoose.default.model('consulta', consultaModel);

exports.default = _default;