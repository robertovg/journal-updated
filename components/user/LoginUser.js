import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import UserForm from './UserForm';
import { signIn } from '../../loginUtils';

class LoginUser extends Component {
  loginUser = async ({ email, password }) => {
    const { signinUser, client } = this.props;
    try {
      const signin = await signinUser({
        variables: { email, password },
      });
      signIn(signin.data.signinUser.token);
      client.resetStore();
    } catch (error) {
      console.error(error);
      throw Error('Wrong credentials');
    }
  };

  render() {
    return (
      <View>
        <Text>Login</Text>
        <UserForm onSubmit={this.loginUser} type="Login" />
      </View>
    );
  }
}

const signinUserMutation = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;

export default graphql(signinUserMutation, { name: 'signinUser' })(LoginUser);
/**
 * Prop types
 */
LoginUser.propTypes = {
  signinUser: PropTypes.func,
  client: PropTypes.object,
};

LoginUser.defaultProps = {
  signinUser() {},
  client: {},
};
