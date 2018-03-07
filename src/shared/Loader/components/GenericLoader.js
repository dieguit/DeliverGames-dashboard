import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

class GenericLoader extends Component {
  render() {
    return (
      <Dimmer.Dimmable as={Segment} dimmed={ this.props.loading }>
        <Dimmer active={ this.props.loading }>
          <Loader>{ this.props.text }</Loader>
        </Dimmer>
        { this.props.children }
      </Dimmer.Dimmable>
    );
  }
}

export default GenericLoader;
