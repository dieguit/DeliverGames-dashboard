import React from 'react';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import requireAuth from './shared/Auth/utils/requireAuth';
import Homepage from './shared/Pages/components/Homepage';
import Login from './shared/Auth/components/Login';
import DevTools from './shared/DevTools/components/DevTools';
import NotFound from './shared/Pages/components/NotFound';
import { UsersPage } from './shared/Users';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache(),
});

const App = function() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <HashRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={requireAuth(Homepage)} />
            <Route exact path="/users" component={requireAuth(UsersPage)} />
            <Route exact path="/dev" component={requireAuth(DevTools)} />

            <Route path="*" component={NotFound} />
          </Switch>
        </HashRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
