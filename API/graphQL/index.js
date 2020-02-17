const graphql = require('graphql');
import { GraphQLObjectType, GraphQLSchema} from 'graphql';
import { GetAutos, CreateAuto } from './autoController';
import {CreateConsulta,GetConsultas} from './consultaController'

// Consultas
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      GetAutos,
      GetConsultas,
    },
  });


// Mutaciones
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {    
        CreateAuto,
        CreateConsulta,
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation

  });
  