import React from 'react';
import { Keyboard, View } from 'react-native';

const handleUnhandledTouches = () => {
  Keyboard.dismiss();
  return false;
};

const DismissKeyboardView = ({ children }) => (
  <View style={{ flex: 1 }} onStartShouldSetResponder={handleUnhandledTouches}>
    {children}
  </View>
);

export default DismissKeyboardView;
