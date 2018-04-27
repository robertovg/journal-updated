import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from 'react-native';
import { withApollo } from 'react-apollo';
import { Fab, Icon } from 'native-base';

import navStyles from '../../styles/navStyles';
import Posts from './Posts';
import { signOut } from '../../loginUtils';

class PostsHome extends Component {
  static navigationOptions = {
    title: 'Home',
    ...navStyles,
  };

  goToPost = () => {
    this.props.navigation.navigate('Post');
  };

  newPost = () => {
    this.props.navigation.navigate('NewPost');
  };

  render() {
    return (
      <View style={styles.container}>
        <Posts {...this.props} />
        <Button
          onPress={() => {
            signOut();
            this.props.client.resetStore();
          }}
          title="Logout"
        />
        <Fab style={styles.newPost} onPress={this.newPost}>
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  newPost: {
    backgroundColor: '#82D8D8',
  },
});

export default withApollo(PostsHome);

/**
 * Prop types
 */
PostsHome.propTypes = {
  client: PropTypes.object,
  navigation: PropTypes.object,
};

PostsHome.defaultProps = {
  client: {},
  navigation: {},
};
