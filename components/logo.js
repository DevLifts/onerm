import React from 'react';
import { View, Image } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          resizeMode="contain"
          source={{ uri: 'https://devlifts.io/images/dist/logo.png' }}
        />
      </View>
    );
  }
}
