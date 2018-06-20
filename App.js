import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./components/logo";
import Calculator from "./components/calculator";

export default class App extends React.Component {
  state = {
    showCalculator: true
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Calculator />
        <Text style={styles.text}>1RM Calculator</Text>
      </View>
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
  }
});
