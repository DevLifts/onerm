import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./components/logo";
import Calculator from "./components/calculator";

export default class App extends React.Component {
  state = {
    showCalculator: true,
    oneRM: 0
  };

  setOneRM = (reps, weight) => {
    this.setState({
      oneRM: weight * (1 + reps / 30)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Calculator oneRM={this.setOneRM} />
        <Text style={styles.text}>1RM Calculator</Text>
        {this.state.oneRM && (
          <Text style={styles.oneRM}>{this.state.oneRM}</Text>
        )}
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
  },
  oneRM: {
    fontSize: 72,
    marginTop: 20,
    color: "white"
  }
});
