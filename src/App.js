import React , {useState}from 'react'
import 'antd/dist/antd.css';
import './App.css'
import PlacasPage from './containers/placas/PlacasPage';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: '/graphql',
});


const App = () => {

  return (
    
    <ApolloProvider client={client}>

      <PlacasPage/>
      </ApolloProvider>
  )
}

export default App
