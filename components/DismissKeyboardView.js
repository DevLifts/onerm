import React from 'react';
import PropTypes from 'prop-types';
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

DismissKeyboardView.propTypes = {
  children: PropTypes.node.isRequired
};

export default DismissKeyboardView;
