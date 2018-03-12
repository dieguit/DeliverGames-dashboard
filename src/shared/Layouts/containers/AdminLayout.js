import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Menu,
  Icon,
  Button,
  Label,
  Image,
} from 'semantic-ui-react';

import { Logout } from '../../Auth/actions';

import { GenericNotification } from '../../Notifications';

import Logo from '../../../assets/Logo180.png';

class AdminLayout extends Component {
  signOut() {
    this.props.Logout().then(res => {
      this.props.history.push('/login');
    });
  }

  logToken() {
    console.log('jwtToken ', localStorage.jwtToken);
  }

  render() {
    return (
      <div className="AdminLayout">
        <Menu
          style={{ width: 250 }}
          as="div"
          vertical
          fixed="left"
          inverted
        >
          <Image centered src={Logo} size='small' />
          <Menu.Item as={Link} to="/" name="home">
            <Icon name="home" />
            Admin Home
          </Menu.Item>
          <Menu.Item as={Link} to="/users" name="users">
            <Icon name="users" />
            Users
          </Menu.Item>
          <Menu.Item as={Link} to="/dev" name="dev">
            <Icon name="configure" />
            Developer Tools
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Pizza Boy</Menu.Header>
            <Menu.Menu>
              <Menu.Item as={Link} to="/" name='ranking' />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Eggszy</Menu.Header>
            <Menu.Menu>
              <Menu.Item as={Link} to="/" name='ranking' />
              <Menu.Item as={Link} to="/" name='gifts' />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Soccer Team</Menu.Header>
            <Menu.Menu>
              <Menu.Item as={Link} to="/" name='ranking' />
              <Menu.Item as={Link} to="/" name='Game Players' />
              <Menu.Item as={Link} to="/" name='Items' />
              <Menu.Item as={Link} to="/" name='Fields' />
              <Menu.Item as={Link} to="/" name='Field Elements' />
            </Menu.Menu>
          </Menu.Item>
        </Menu>
        <div style={{ maxWidth: '100%', marginLeft: 250 }}>
          <div style={{ background: 'black' }}>
            <Menu inverted style={{ maxWidth: '100%', marginTop: 0 }}>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Button as='div' labelPosition='right' title='Get Token!'
                          onClick={this.logToken}>
                    <Button as='div' color='blue'>
                      <Icon name='user' />
                    </Button>
                    <Label as='a' basic color='blue' pointing='left'>
                      {this.props.user.username}
                    </Label>
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button animated onClick={this.signOut.bind(this)}>
                    <Button.Content visible>Sign out</Button.Content>
                    <Button.Content hidden>
                      Bye bye
                    </Button.Content>
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </div>
          <div style={{ padding: 10 }}>
            {this.props.children}
          </div>
        </div>
        <GenericNotification />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(mapStateToProps, { Logout })(AdminLayout);
