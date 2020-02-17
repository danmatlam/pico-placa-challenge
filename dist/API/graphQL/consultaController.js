"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetConsultas = exports.CreateConsulta = void 0;

var _graphql = require("graphql");

var _consultaModel = _interopRequireDefault(require("../mongoDb/consultaModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TIPOS DE DATOS
var ConsultaType = new _graphql.GraphQLObjectType({
  name: 'ConsultaType',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLID
      },
      placa: {
        type: _graphql.GraphQLString
      },
      fecha: {
        type: _graphql.GraphQLString
      },
      hora: {
        type: _graphql.GraphQLString
      },
      isLocked: {
        type: _graphql.GraphQLBoolean
      }
    };
  }
}); // METODOS DE LECTURA

var GetConsultas = {
  type: new _graphql.GraphQLList(ConsultaType),
  resolve: function resolve(parent, args) {
    return _consultaModel.default.find({}).sort({
      _id: -1
    });
  }
}; //MUTACION METODOS DE ESCRITURA

exports.GetConsultas = GetConsultas;
var CreateConsulta = {
  type: ConsultaType,
  args: {
    placa: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
    },
    fecha: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
    },
    hora: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
    },
    isLocked: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLBoolean)
    }
  },
  resolve: function resolve(parent, args) {
    var payload = new _consultaModel.default({
      placa: args.placa,
      fecha: args.fecha,
      hora: args.hora,
      isLocked: args.isLocked
    });
    return payload.save();
  }
};
exports.CreateConsulta = CreateConsulta;