import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';

const Posts = ({ navigation, screenProps }) => (
  <View>
    <List>
      <FlatList
        data={screenProps.user.posts}
        renderItem={({ item }) => (
          <ListItem
            onPress={() =>
              navigation.navigate('Post', {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Body>
              <Text>{item.title}</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        )}
        keyExtractor={item => item.id}
      />
    </List>
  </View>
);

export default Posts;
/**
 * Prop types
 */
Posts.propTypes = {
  navigation: PropTypes.object,
  screenProps: PropTypes.object,
};

Posts.defaultProps = {
  navigation: {},
  screenProps: {},
};
