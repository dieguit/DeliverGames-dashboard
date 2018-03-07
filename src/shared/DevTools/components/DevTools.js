import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import '../../../../node_modules/graphiql/graphiql.css';

import { API_URL } from '../../../config';
import AdminLayout from '../../Layouts/containers/AdminLayout';

class DevTools extends Component {
  graphQLFetcher(graphQLParams) {
    return fetch(`${API_URL}/graphiql`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }

  render() {
    const styles = {
      height: 500,
      position: 'relative',
      left: 0,
    };

    return (
      <AdminLayout {...this.props}>
        <div className='DevTools' >
          <h1>Developer Tools</h1>
          <div style={styles}>
            <GraphiQL fetcher={this.graphQLFetcher} />
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default DevTools;
