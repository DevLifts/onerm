import React from 'react';
import { View, Image } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 170,
            height: 100,
            marginBottom: 35
          }}
          source={{ uri: 'https://devlifts.io/images/dist/logo.png' }}
        />
      </View>
    );
  }
}
