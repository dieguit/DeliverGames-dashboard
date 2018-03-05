import React, { Component } from 'react';
import AdminLayout from '../containers/AdminLayout';

class Homepage extends Component {
  render() {
    return (
      <AdminLayout {...this.props}>
        <div className='AdminWellcome'>
          <h1>Wellcome to Admin Zone.</h1>
          {// We could place a Notifications component here
          }
          <p>Fill this with some notifications, links, etc.</p>
          <p>Home, Back to site, Products and Categories are implemented.</p>
        </div>
      </AdminLayout>
    );
  }
}

export default Homepage;
