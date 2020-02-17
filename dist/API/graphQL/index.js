"use strict";

var _graphql = require("graphql");

var _autoController = require("./autoController");

var _consultaController = require("./consultaController");

var graphql = require('graphql');

// Consultas
var RootQuery = new _graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    GetAutos: _autoController.GetAutos,
    GetConsultas: _consultaController.GetConsultas
  }
}); // Mutaciones

var Mutation = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    CreateAuto: _autoController.CreateAuto,
    CreateConsulta: _consultaController.CreateConsulta
  }
});
module.exports = new _graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});