import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard, SafeAreaView } from 'react-native';

const handleUnhandledTouches = () => {
  Keyboard.dismiss();
  return false;
};

const DismissKeyboardView = ({ children }) => (
  <SafeAreaView
    style={{ flex: 1, backgroundColor: '#1BBC9B' }}
    onStartShouldSetResponder={handleUnhandledTouches}
  >
    {children}
  </SafeAreaView>
);

DismissKeyboardView.propTypes = {
  children: PropTypes.node.isRequired
};

export default DismissKeyboardView;
