import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  Menu,
  Icon,
  Segment,
  Container,
  Button,
  Image,
  Dropdown,
} from 'semantic-ui-react';

class AdminLayout extends Component {
  componentWillMount() {
    if (!this.props.user.username) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="AdminLayout">
        <Sidebar
          as={Menu}
          animation="push"
          width="thin"
          icon="labeled"
          vertical
          inverted
          visible
        >
          <Menu.Item as={Link} to="/admin" name="home">
            <Icon name="home" />
            Admin Home
          </Menu.Item>
          <Menu.Item as={Link} to="/" name="back">
            <Icon name="reply" />
            Back to site
          </Menu.Item>
          <Menu.Item as={Link} to="/admin/products" name="products">
            <Icon name="list layout" />
            Products
          </Menu.Item>
          <Menu.Item name="categories">
            <Icon name="unordered list" />
            Categories
          </Menu.Item>
          <Menu.Item name="users">
            <Icon name="users" />
            Users
          </Menu.Item>
          <Menu.Item name="media">
            <Icon name="image" />
            Media Manager
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          {this.props.user.username}
          {this.props.children}
        </Sidebar.Pusher>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.login.user,
  };
}

export default connect(mapStateToProps)(AdminLayout);
