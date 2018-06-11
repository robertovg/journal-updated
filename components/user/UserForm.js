import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Alert } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

class UserForm extends Component {
  state = {
    email: '',
    password: '',
  };

  isEmailValid = () => !!this.state.email.match(/@/);
  isPasswordValid = () => this.state.password.length > 5;

  submitForm = () => {
    const { email, password } = this.state;
    this.props
      .onSubmit({
        email,
        password,
      })
      .catch((error = {}) => {
        const { message } = error;
        Alert.alert(message, undefined, [{ text: 'Try Again' }], { cancelable: false });
      });
  };

  render() {
    const { email, password } = this.state;
    const [emailValid, passwordValid] = [this.isEmailValid(), this.isPasswordValid()];
    return (
      <Form>
        <Item floatingLabel success={emailValid}>
          <Label>Email</Label>
          <Input
            keyboardType="email-address"
            value={email}
            onChangeText={val => this.setState({ email: val })}
          />
        </Item>
        <Item floatingLabel success={passwordValid}>
          <Label>Password</Label>
          <Input
            secureTextEntry
            value={password}
            onChangeText={val => this.setState({ password: val })}
          />
        </Item>
        <Button
          title={this.props.type}
          onPress={this.submitForm}
          color="#82D8D8"
          disabled={!passwordValid || !emailValid}
        />
      </Form>
    );
  }
}

export default UserForm;
/**
 * Prop types
 */
UserForm.propTypes = {
  onSubmit: PropTypes.func,
  type: PropTypes.string,
};

UserForm.defaultProps = {
  onSubmit() {},
  type: 'Register',
};
