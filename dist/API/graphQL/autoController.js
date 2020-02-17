"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAuto = exports.GetAutos = void 0;

var _graphql = require("graphql");

var _autoModel = _interopRequireDefault(require("../mongoDb/autoModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TIPOS DE DATOS
var AutoType = new _graphql.GraphQLObjectType({
  name: 'AutoType',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLID
      },
      placa: {
        type: _graphql.GraphQLString
      }
    };
  }
}); // METODOS DE LECTURA

var GetAutos = {
  type: new _graphql.GraphQLList(AutoType),
  resolve: function resolve(parent, args) {
    var payload = _autoModel.default.find({});

    return payload;
  }
}; // MUTACIONES = METODOS DE ESCRITURA

exports.GetAutos = GetAutos;
var CreateAuto = {
  type: AutoType,
  args: {
    placa: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
    }
  },
  resolve: function resolve(parent, args) {
    console.log(args.placa);
    var payload = new _autoModel.default({
      placa: args.placa
    });
    return payload.save();
  }
};
exports.CreateAuto = CreateAuto;