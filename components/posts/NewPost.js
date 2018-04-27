import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostForm from './PostForm';
import navStyles from '../../styles/navStyles';

class NewPost extends Component {
  static navigationOptions = {
    title: 'New Post',
    ...navStyles,
  };
  state = {
    loading: false,
  };
  newPost = ({ title, body }) => {
    this.setState({
      loading: true,
    });
    const { newPost, navigation, screenProps } = this.props;
    newPost({
      variables: {
        title,
        body,
        userId: screenProps.user.id,
      },
    })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    console.log(this.props.screenProps.user);
    return (
      <View>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <PostForm onSubmit={this.newPost} />
        )}
      </View>
    );
  }
}

const newPostQuery = gql`
  mutation newPost($title: String!, $body: String!, $userId: ID!) {
    createPost(title: $title, body: $body, userId: $userId) {
      id
    }
  }
`;
export default graphql(newPostQuery, {
  name: 'newPost',
  options: {
    refetchQueries: ['userQuery'],
  },
})(NewPost);

/**
 * Prop types
 */
NewPost.propTypes = {
  newPost: PropTypes.func,
  navigation: PropTypes.object,
  screenProps: PropTypes.object,
};

NewPost.defaultProps = {
  newPost() {},
  navigation: {},
  screenProps: {},
};
