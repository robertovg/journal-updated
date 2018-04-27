import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostElement from './components/posts/PostElement';
import NewPost from './components/posts/NewPost';
import UpdatePost from './components/posts/UpdatePost';

import Login from './components/user/Login';
import PostsHome from './components/posts/PostsHome';

const Navigator = StackNavigator({
  Home: {
    screen: PostsHome,
  },
  Post: {
    screen: PostElement,
  },
  NewPost: {
    screen: NewPost,
  },
  UpdatePost: {
    screen: UpdatePost,
  },
});

const NavWrapper = ({ loading, user }) => {
  if (loading)
    return (
      <View style={styles.justLoadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  if (!user) return <Login />;
  return <Navigator screenProps={{ user }} />;
};

const styles = StyleSheet.create({
  justLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

const userQuery = gql`
  query userQuery {
    user {
      id
      email
      posts(orderBy: createdAt_DESC) {
        id
        title
      }
    }
  }
`;

export default graphql(userQuery, {
  props: ({ data }) => ({ ...data }),
})(NavWrapper);

/**
 * Prop types
 */
NavWrapper.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
};

NavWrapper.defaultProps = {
  loading: true,
  user: {},
};
