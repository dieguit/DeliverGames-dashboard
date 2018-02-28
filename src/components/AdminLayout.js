import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Icon, Segment } from 'semantic-ui-react';

const AdminLayout = (props) => (
  <div className='AdminLayout'>
    <Sidebar as={Menu} animation='push' width='thin' icon='labeled' vertical inverted visible>
      <Menu.Item as={Link} to="/admin" name='home'>
        <Icon name='home' />
        Admin Home
      </Menu.Item>
      <Menu.Item as={Link} to="/" name='back'>
        <Icon name='reply' />
        Back to site
      </Menu.Item>
      <Menu.Item as={Link} to="/admin/products"  name='products'>
        <Icon name='list layout' />
        Products
      </Menu.Item>
      <Menu.Item name='categories'>
        <Icon name='unordered list' />
        Categories
      </Menu.Item>
      <Menu.Item name='users'>
        <Icon name='users' />
        Users
      </Menu.Item>
      <Menu.Item name='media'>
        <Icon name='image' />
        Media Manager
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher>
      <Segment>
        {props.children}
      </Segment>
    </Sidebar.Pusher>
  </div>
);

export default AdminLayout;
