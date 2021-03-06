import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import navStyles from '../../styles/navStyles';
import PostForm from './PostForm';
import LoadingStyled from '../utils/LoadingStyled';

class UpdatePost extends Component {
  static navigationOptions = {
    title: 'Update Post',
    ...navStyles,
  };

  state = {
    loading: false,
  };

  updatePost = async ({ title, body }) => {
    const { updatePost, navigation, screenProps, Post } = this.props;
    this.setState({ loading: true });
    try {
      await updatePost({
        variables: {
          id: Post.id,
          title,
          body,
          userId: screenProps.user.id,
        },
      });
      navigation.navigate('Post', {
        id: Post.id,
        title,
      });
    } catch (error) {
      console.log(error);
      throw Error('Problem updating the Post');
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return this.state.loading ? (
      <LoadingStyled />
    ) : (
      <View>
        <PostForm onSubmit={this.updatePost} post={this.props.Post} />
      </View>
    );
  }
}

const updatePostMutation = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!, $userId: ID!) {
    updatePost(id: $id, title: $title, body: $body, userId: $userId) {
      id
    }
  }
`;

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;

export default compose(
  graphql(updatePostMutation, {
    name: 'updatePost',
    options: {
      refetchQueries: ['Post'],
    },
  }),
  graphql(postQuery, {
    props: ({ data }) => ({ ...data }),
    options: ({ navigation }) => ({
      variables: {
        id: navigation.state.params.id,
      },
    }),
  })
)(UpdatePost);
/**
 * Prop types
 */
UpdatePost.propTypes = {
  updatePost: PropTypes.func,
  navigation: PropTypes.object,
  screenProps: PropTypes.object,
  Post: PropTypes.object,
};

UpdatePost.defaultProps = {
  updatePost() {},
  navigation: {},
  screenProps: {},
  Post: {},
};
