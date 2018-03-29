import React, { Component } from 'react';

import { API_URL } from '../../../config';
import AdminLayout from '../../Layouts/containers/AdminLayout';

class DevTools extends Component {
  render() {
    const styles = {
      minHeight: 600,
      width: '100%',
      border: 0,
    };

    return (
      <AdminLayout {...this.props}>
        <div className="DevTools">
          <h1>Developer Tools</h1>
          <iframe style={styles} src={`${API_URL}/graphiql`} />
        </div>
      </AdminLayout>
    );
  }
}

export default DevTools;
