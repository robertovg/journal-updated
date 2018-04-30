import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  justLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
const LoadingStyled = () => (
  <View style={styles.justLoadingContainer}>
    <ActivityIndicator size="large" />
  </View>
);

export default LoadingStyled;
