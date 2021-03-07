import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches/Launches';
import logo from './assets/spacex-black-logo.png'
import './App.css';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
})

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="container" >
                <img className={'spacex_logo'} src={logo} alt="SpaceX" />
                <Launches />
            </div>
        </ApolloProvider>
    );
}

export default App;