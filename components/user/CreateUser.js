import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import UserForm from './UserForm';
import { signIn } from '../../loginUtils';

class CreateUser extends Component {
  createUser = async ({ email, password }) => {
    const { createUser, signinUser, client } = this.props;
    try {
      await createUser({
        variables: { email, password },
      });
      const signin = await signinUser({
        variables: { email, password },
      });
      signIn(signin.data.signinUser.token);
      client.resetStore();
    } catch (error) {
      console.error(error);
      // I know, very hard assumption...
      // but just to don't omit the exception and show to the user
      throw Error('Username already used');
    }
  };

  render() {
    return (
      <View>
        <Text>Register</Text>
        <UserForm onSubmit={this.createUser} type="Register" />
      </View>
    );
  }
}

const createUserMutation = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(authProvider: { email: { email: $email, password: $password } }) {
      id
    }
  }
`;

const signinUserMutation = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;

export default compose(
  graphql(signinUserMutation, { name: 'signinUser' }),
  graphql(createUserMutation, { name: 'createUser' })
)(CreateUser);
/**
 * Prop types
 */
CreateUser.propTypes = {
  createUser: PropTypes.func,
  signinUser: PropTypes.func,
  client: PropTypes.object,
};

CreateUser.defaultProps = {
  createUser() {},
  signinUser() {},
  client: {},
};
