import "@babel/polyfill";
import express from "express";
import graphQLHTTP from 'express-graphql';
import cors from 'cors'
import schema from "./graphQL/";
import path from 'path';
const app = express();

import mongo from './mongoDb';
mongo.connection.once('open', (res)=> {});


app.use('/graphql',graphQLHTTP({
  schema:schema,
  graphiql:true
}));

app.use(cors());
app.set('port', process.env.PORT || 3001);


app.use('/', express.static(path.join(__dirname, '../build')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(app.get("port"), ()=> console.log('server'));

