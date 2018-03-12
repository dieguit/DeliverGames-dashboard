import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon, Popup } from 'semantic-ui-react';

import { getUsers, deleteUser, setEditUser, setModalStatus } from '../actions';

import AdminLayout from '../../Layouts/containers/AdminLayout';
import UserFormModal from './UserForm';
import { GenericLoader } from '../../Loader';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      deletingItem: false,
    };
  }

  openModal() {
    this.props.setModalStatus(true);
  }

  componentWillMount() {
    this.props.getUsers().then((res) => {
      this.setState({ loading: false });
    });
  }

  editItem(user) {
    this.props.setEditUser(user);
    this.props.setModalStatus(true);
  }

  deleteItem(id) {
    this.setState({ deletingItem: true });
    this.props.deleteUser(id).then((res) => {
      this.setState({ deletingItem: false });
    });
  }

  renderRow(item, index) {
    if (item) {
      item.updatedAt = new Date(item.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

      return (
        <Table.Row key={ item.id }>
          <Table.Cell>{ item.id }</Table.Cell>
          <Table.Cell>{ item.username }</Table.Cell>
          <Table.Cell>{ item.email }</Table.Cell>
          <Table.Cell>{ item.updatedAt } </Table.Cell>
          <Table.Cell collapsing>
            <Button icon primary size='mini'
                    onClick={ () => this.editItem(item) }
            >
              <Icon name='edit' />
            </Button>
            <Popup
              trigger={
                <Button icon color='red' size='mini'>
                  <Icon name='trash' />
                </Button>
              }
              content={
                <Button
                  color='red'
                  loading={ this.state.deletingItem }
                  disabled={ this.state.deletingItem }
                  content={`Confirm deleting ${item.username}`}
                  onClick={ () => this.deleteItem(item.id) }
                />
              }
              on='click'
              position='top right'
            />
          </Table.Cell>
        </Table.Row>
      );
    }
    return undefined;
  }

  render() {
    const { users } = this.props.users;

    const renderModal = modalOpened => {
      if (modalOpened) {
        return <UserFormModal />;
      }
      return null;
    };

    return (
      <AdminLayout {...this.props}>
        <div className='AdminWellcome'>
          <h1>Users</h1>
          <GenericLoader loading={ this.state.loading } text='Getting user list'>
            <div>
              <Button icon primary labelPosition='left'
                      onClick={ this.openModal.bind(this) }
              >
                Create
                <Icon name='add' />
              </Button>
              <Table striped
                headerRow={['ID', 'User Name', 'Email', 'Modified', 'Actions']}
                tableData={ users }
                renderBodyRow={ this.renderRow.bind(this) }
              />
              { renderModal(this.props.modalOpened) }
            </div>
          </GenericLoader>
        </div>
      </AdminLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    modalOpened: state.users.modalOpened,
  };
}

export default connect(mapStateToProps, {
  getUsers, setModalStatus, deleteUser, setEditUser,
})(Users);
