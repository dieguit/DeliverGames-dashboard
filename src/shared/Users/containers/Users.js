import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import { getUsers } from '../actions';

import AdminLayout from '../../Layouts/containers/AdminLayout';
import { GenericLoader } from '../../Loader';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.props.getUsers().then((res) => {
      this.setState({ loading: false });
      console.warn('erda',this.props.users.users);
    });
  }

  renderRow(item, index) {
    return ()
  }

  render() {
    const { users } = this.props.users;

    return (
      <AdminLayout {...this.props}>
        <div className='AdminWellcome'>
          <h1>Users</h1>
          <GenericLoader loading={ this.state.loading } text='Getting user list'>
            <Table
              headerRow={['ID', 'User Name', 'Email', 'Modified']}
              tableData={ users }
              renderBodyRow={ this.renderRow }
            />
          </GenericLoader>
        </div>
      </AdminLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps, { getUsers })(Users);
