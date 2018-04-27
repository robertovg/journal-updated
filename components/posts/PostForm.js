import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Button, ScrollView } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

class PostForm extends Component {
  state = {
    title: this.props.post.title || '',
    body: this.props.post.body || '',
  };

  submitForm = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body,
    });
  };

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="never">
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input onChangeText={title => this.setState({ title })} value={this.state.title} />
          </Item>
          <Item floatingLabel>
            <Label>Body</Label>
            <Input
              multiline
              style={styles.body}
              onChangeText={body => this.setState({ body })}
              value={this.state.body}
            />
          </Item>
          <Button title="Save Post" onPress={this.submitForm} />
        </Form>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    height: 400,
    borderColor: '#333',
  },
});

export default PostForm;
/**
 * Prop types
 */
PostForm.propTypes = {
  post: PropTypes.object,
  onSubmit: PropTypes.func,
};

PostForm.defaultProps = {
  post: {},
  onSubmit() {},
};
