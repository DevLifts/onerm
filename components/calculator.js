import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      reps: "",
      weight: ""
    };
  }

  setReps = text => {
    this.setState({ reps: text });
    this.oneRM();
  };

  setWeight = text => {
    this.setState({ weight: text });
    this.oneRM();
  };

  oneRM = () => {
    const reps = this.state.reps;
    const weight = this.state.weight;
    if (reps && weight) {
      this.props.oneRM(reps, weight);
    }
  };

  // TODO - add debounce to text inputs
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TextInput
          value={this.state.reps}
          style={styles.textInput}
          onChangeText={text => this.setReps(text)}
        />
        <Text style={styles.label}>Reps</Text>
        <TextInput
          value={this.state.weight}
          onChangeText={text => this.setWeight(text)}
          style={styles.textInput}
        />
        <Text style={styles.label}>Weight</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    width: 100,
    height: 50,
    backgroundColor: "white",
    borderRadius: 5
  },
  label: {
    marginBottom: 15,
    color: "white"
  }
});
