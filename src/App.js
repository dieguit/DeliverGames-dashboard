import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Homepage from './components/Homepage';
import Login from './components/Login';
import NotFound from './components/NotFound';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:8000/graphql'}),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/login' component={Login} />
              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
