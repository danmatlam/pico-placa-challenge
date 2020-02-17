"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _cors = _interopRequireDefault(require("cors"));

var _graphQL = _interopRequireDefault(require("./graphQL/"));

var _path = _interopRequireDefault(require("path"));

var _mongoDb = _interopRequireDefault(require("./mongoDb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

_mongoDb.default.connection.once('open', function (res) {});

app.use('/graphql', (0, _expressGraphql.default)({
  schema: _graphQL.default,
  graphiql: true
}));
app.use((0, _cors.default)());
app.set('port', process.env.PORT || 3001);
app.use('/', _express.default.static(_path.default.join(__dirname, '../build')));
app.get('/*', function (req, res) {
  res.sendFile(_path.default.resolve(__dirname, '../build', 'index.html'));
});
app.listen(app.get("port"), function () {
  return console.log('server');
});