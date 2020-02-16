import { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';

import autoModel from '../mongoDb/autoModel';

// TIPOS DE DATOS
const AutoType = new GraphQLObjectType({
    name:'AutoType',
    fields:()=>({
        id:{type:GraphQLID},
        placa:{type:GraphQLString}
    })
});

// METODOS DE LECTURA
const GetAutos = {
    type: new GraphQLList(AutoType),
    resolve(parent, args) {
        const payload = autoModel.find({})
        return payload;
    }
};


// MUTACIONES = METODOS DE ESCRITURA
const CreateAuto  = {
    type: AutoType,
    args: {
        placa:{ type: GraphQLNonNull(GraphQLString) }
    },
    resolve: (parent, args) =>{
        console.log(args.placa)
       const payload = new autoModel({
           placa:args.placa,
       });
       return payload.save();

    }
}

export { GetAutos, CreateAuto}



