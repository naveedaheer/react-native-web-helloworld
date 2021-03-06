import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeWebHelloWorld extends Component {
  render() {
    return (
      <View style={styles.ViewStyle}>

        <Text style={styles.HelloWorld}>
          Hello World React Native Web!
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  HelloWorld: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  ViewStyle: {
    backgroundColor: '#00FF00',
  }
});

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeWebHelloWorld);
