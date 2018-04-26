import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class LayoutJustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        <View style={{ height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ height: 50, backgroundColor: 'skyblue'}} />
        <View style={{ height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
