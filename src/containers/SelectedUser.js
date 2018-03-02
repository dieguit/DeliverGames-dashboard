import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedUser extends Component {
  render() {
    return(
      <div>
        <h3>Selected user:</h3>
        { this.props.activeUser ? this.props.activeUser.username : 'N/A' }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeUser: state.activeUser,
  }
}

export default connect(mapStateToProps)(SelectedUser);
