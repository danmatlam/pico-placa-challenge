"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
_mongoose.default.Promise = global.Promise;
var uri = 'mongodb://heroku_jqg0flwn:muamvvh0rdrebts3jqflebmb80@ds123196.mlab.com:23196/heroku_jqg0flwn';

_mongoose.default.connect(uri, options);

var _default = _mongoose.default;
exports.default = _default;