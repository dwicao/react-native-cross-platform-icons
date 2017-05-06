import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

export default class sparkClick extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>react-native-cross-platform-icons</Text>
        <CrossPlatformIcon name="home" size={30} color="#000000" />
        <CrossPlatformIcon name="home" size={30} color="#000000" outline />
        <CrossPlatformIcon name="basket" size={25} color="#000000" />
        <CrossPlatformIcon name="jet" size={35} color="blue" />
        <CrossPlatformIcon name="arrow-back" size={32} color="red" />
        <CrossPlatformIcon name="send" size={40} color="#bada55" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('sparkClick', () => sparkClick);
