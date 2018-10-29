import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import Logo from './components/logo';
import Calculator from './components/calculator';
import DismissKeyboardView from './components/DismissKeyboardView';

export default class App extends React.Component {
  state = {
    oneRM: ''
  };

  setOneRM = (reps, weight) => {
    // prevent NaN from displaying by checking for falsy value
    const oneRMInteger = Math.round(weight * (1 + reps / 30)) || 0;
    this.setState({
      oneRM: oneRMInteger
    });
  };

  render() {
    return (
      <DismissKeyboardView>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={[styles.actionContainer, styles.logoContainer]}>
            <Logo />
          </View>
          <View style={[styles.actionContainer, styles.biggerActionContainer]}>
            <Calculator oneRM={this.setOneRM} />
          </View>
          <View style={[styles.actionContainer, styles.biggerActionContainer]}>
            <Text style={styles.oneRM}>{this.state.oneRM}</Text>
            <Text style={styles.text}>1RM Calculator</Text>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboardView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1BBC9B'
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  oneRM: {
    fontSize: 72,
    color: 'white'
  },
  logoContainer: {
    flex: 1
  },
  actionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  biggerActionContainer: {
    flex: 2
  }
});
