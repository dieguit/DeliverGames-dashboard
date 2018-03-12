import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Segment, Modal, Checkbox } from 'semantic-ui-react';

import { createUser, updateUser, setEditUser, setModalStatus } from '../actions';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      willChangePass: false,
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
    this.props.setEditUser({});
    this.props.setModalStatus(false);
  }

  async onSubmit(values) {
    this.setState({ loading: true });

    let result;
    // This is when updating
    if (this.props.editingUser && this.props.editingUser.id) {
      if (!this.state.willChangePass) {
        delete values.password;
      }
      result = await this.props.updateUser(values);
    } else {
      // Creating
      result = await this.props.createUser(values);
    }

    if (result && result.err) {
      this.setState({ loading: false });
    } else {
      this.closeModal();
    }
  }

  render() {
    const { handleSubmit, editingUser } = this.props;

    const renderPasswordField = () => {
      if (this.props.editingUser && this.props.editingUser.id) {
        return (
          <div>
            <Checkbox
              label="Change password?"
              checked={ this.state.willChangePass }
              onChange={ () => this.setState({ willChangePass: !this.state.willChangePass }) }
            />
            {
              this.state.willChangePass && (
                <Field
                  name="password"
                  placeholder="Password"
                  label="Password*"
                  type="password"
                  component={ this.renderField }
                />
              )
            }
          </div>
        );
      }
      return (
        <Field
          name="password"
          placeholder="Password"
          label="Password*"
          type="password"
          component={this.renderField}
        />
      );
    };

    return (
      <Modal dimmer='blurring' size='large'
             style={
               //tmp fix @see: https://github.com/Semantic-Org/Semantic-UI-React/issues/2550
               { display: 'fixed !important', marginTop: '0 !important' }
             }
             open={ this.props.modalOpened }
             onClose={ this.closeModal }>
        <Modal.Header>{ editingUser && editingUser.id ? 'Update' : 'Create' }</Modal.Header>
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
              { renderPasswordField() }
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

const mapStateToProps = state => ({
  modalOpened: state.users.modalOpened,
  initialValues: {
    ...state.users.editingUser,
    password: '',
  },
  editingUser: state.users.editingUser,
});

const connectedReduxForm = reduxForm({
  validate,
  form: 'createUserModalForm',
})(UserForm);

export default connect(mapStateToProps, { createUser, updateUser, setEditUser, setModalStatus })(connectedReduxForm);
