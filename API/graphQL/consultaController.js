import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLNonNull } from "graphql";
import consultaModel from "../mongoDb/consultaModel";


// TIPOS DE DATOS
const ConsultaType = new GraphQLObjectType({
    name:'ConsultaType',
    fields:()=>({
        id:{type:GraphQLID},
        placa:{type:GraphQLString},
        fecha:{type:GraphQLString},
        hora: {type:GraphQLString},

        isLocked:{type:GraphQLBoolean},
    })
});

//MUTACION METODOS DE ESCRITURA

const CreateConsulta  = {
    type: ConsultaType,
    args: {
        placa:{ type: GraphQLNonNull(GraphQLString) },
        fecha:{ type: GraphQLNonNull(GraphQLString) },
        hora:{ type: GraphQLNonNull(GraphQLString) },
        isLocked:{ type: GraphQLNonNull(GraphQLBoolean) },
    },
    resolve: (parent, args) =>{
      const payload = new consultaModel({
           placa:args.placa,
           fecha:args.fecha,
           hora:args.hora,
           isLocked:args.isLocked
       });
       return payload.save();

    }
}
export { CreateConsulta, }