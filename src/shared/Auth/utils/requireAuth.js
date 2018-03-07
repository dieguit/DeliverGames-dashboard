import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class AuthRequire extends Component {
    componentWillMount() {
      if (!this.props.user.username) {
        this.props.history.push('/login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.auth.user,
    };
  }

  return connect(mapStateToProps)(AuthRequire);
}
