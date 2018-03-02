import React from 'react';
import AdminLayout from './AdminLayout';
import UserList from '../containers/UserList';
import SelectedUser from '../containers/SelectedUser';

const Homepage = () => (
  <AdminLayout>
    <div className='AdminWellcome'>
      <h1>Wellcome to Admin Zone.</h1>
      {// We could place a Notifications component here
      }
      <UserList />
      <SelectedUser />
      <hr/>
      <p>Fill this with some notifications, links, etc.</p>
      <p>Home, Back to site, Products and Categories are implemented.</p>
    </div>
  </AdminLayout>
);

export default Homepage;
