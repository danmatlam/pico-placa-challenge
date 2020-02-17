import { gql } from 'apollo-boost';

const CREATE_CONSULTA = gql`
mutation(
  $placa: String!
  $fecha: String!
  $hora: String!
  $isLocked: Boolean!
) {
    CreateConsulta(
        placa: $placa
        fecha: $fecha
        hora: $hora
        isLocked: $isLocked
    ) {
        id
        placa
        fecha
        hora
    }
}`

const GET_CONSULTAS = gql`{
        GetConsultas{
            id,
            placa,
            fecha,
            hora,
            isLocked
        }
}`


export {CREATE_CONSULTA, GET_CONSULTAS}

