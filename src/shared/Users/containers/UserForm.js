import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Segment, Modal } from 'semantic-ui-react';

import { createUser, setModalStatus } from '../actions';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  renderField(field) {
    return (
      <Form.Input
        label={field.label}
        placeholder={field.placeholder}
        type={field.type}
        error={field.meta.touched && field.meta.error != null }
        {...field.input}
      />
    );
  }

  closeModal() {
    this.props.setModalStatus(false);
  }

  async onSubmit(values) {
    this.setState({ loading: true });
    const result = await this.props.createUser(values);
    if (result && result.err) {
      this.setState({ loading: false });
    } else {
      this.closeModal();
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Modal dimmer='blurring' size='large'
             style={
               //tmp fix @see: https://github.com/Semantic-Org/Semantic-UI-React/issues/2550
               { display: 'fixed !important', marginTop: '0 !important' }
             }
             open={ this.props.modalOpened }
             onClose={ this.closeModal }>
        <Modal.Header>Create</Modal.Header>
        <Modal.Content>
          <Form as="form" onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
            <Segment basic>
              <Field
                name="username"
                placeholder="Username"
                label="Username*"
                type="text"
                component={this.renderField}
              />
              <Field
                name="email"
                placeholder="E-mail"
                label="E-mail*"
                type="text"
                component={this.renderField}
              />
              <Field
                name="password"
                placeholder="Password"
                label="Password*"
                type="password"
                component={this.renderField}
              />
              <span> * Required</span>
            </Segment>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' disabled={ this.state.loading } onClick={ this.closeModal }>
            Cancel
          </Button>
          <Button positive type='submit'
                  icon='checkmark'
                  labelPosition='right'
                  content="Save"
                  disabled={ this.state.loading } loading={ this.state.loading }
                  onClick={ handleSubmit(this.onSubmit.bind(this)) }
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'This username does not please me..';
  }

  if (!values.email) {
    errors.email = 'This e-mail does not please me..';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'This e-mail does not look right.';
  }

  if (!values.password) {
    errors.password = 'You need a password to  bro';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    modalOpened: state.users.modalOpened,
  };
}

export default reduxForm({
  validate,
  form: 'createUserModalForm',
})(connect(mapStateToProps, { createUser, setModalStatus })(UserForm));
