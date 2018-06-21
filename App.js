import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import Logo from "./components/logo";
import Calculator from "./components/calculator";

export default class App extends React.Component {
  state = {
    oneRM: ""
  };

  setOneRM = (reps, weight) => {
    this.setState({
      oneRM: Math.round(weight * (1 + reps / 30))
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Logo />
        <Calculator oneRM={this.setOneRM} />
        <Text style={styles.oneRM}>{this.state.oneRM}</Text>
        <Text style={styles.text}>1RM Calculator</Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1BBC9B",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold"
  },
  oneRM: {
    fontSize: 72,
    marginBottom: 20,
    color: "white"
  }
});
