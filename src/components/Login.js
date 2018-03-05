import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import { Login } from '../actions/Login';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitClicked: false,
    };
  }

  renderField(field) {
    return (
      <Form.Input
        fluid
        iconPosition='left'
        icon={field.icon}
        placeholder={field.placeholder}
        type={field.type}
        error={field.meta.touched && field.meta.error != null }
        {...field.input}
      />
    );
  }

  onSubmit(values) {
    this.setState({ submitClicked: true });
    console.warn('values',values);
    this.props.Login(values).then(res => {
      console.warn(res);
    });
  }

  render() {
    const { handleSubmit, submitted } = this.props;

    return (
      <div className='login-form'>
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
        <Grid
          textAlign='center'
          style={{height: '100%'}}
          verticalAlign='middle'
        >
          <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' color='orange' textAlign='center'>
              Deliver Games Private Area
            </Header>
            <Form as="form" size='large' onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
              <Segment stacked>
                <Field
                  name="username"
                  icon="user"
                  placeholder="E-mail or username"
                  type="text"
                  component={this.renderField}
                />
                <Field
                  name="password"
                  icon="lock"
                  placeholder="Password"
                  type="password"
                  component={this.renderField}
                />
                <Button disabled={submitted} color='orange' fluid size='large'>Login</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "This username/e-mail does not please me..";
  }
  if (!values.password) {
    errors.password = "You need a password to login bro";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'LoginForm',
})(
  connect(null, { Login })(LoginForm)
);
