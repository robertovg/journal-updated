import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const LoadingStyled = () => (
  <View style={styles.justLoadingContainer}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  justLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoadingStyled;
