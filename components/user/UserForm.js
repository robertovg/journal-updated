import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

class UserForm extends Component {
  state = {
    email: '',
    password: '',
  };

  submitForm = () => {
    const { email, password } = this.state;
    this.props.onSubmit({
      email,
      password,
    });
  };

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button title={this.props.type} onPress={this.submitForm} />
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
