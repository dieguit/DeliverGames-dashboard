import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notifications from 'react-notification-system-redux';

class GenericNotification extends Component {
  render() {
    const { notifications } = this.props;

    return <Notifications notifications={notifications} />;
  }
}

export default connect((state) => ({ notifications: state.notifications }))(GenericNotification);
