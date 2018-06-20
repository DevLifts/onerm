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
    if (this.state.reps && this.state.weight) {
      this.props.oneRM(69);
    }
  };

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
          onTextChange={this.setReps}
        />
        <Text style={styles.label}>Reps</Text>
        <TextInput
          value={this.state.weight}
          onTextChange={this.setWeight}
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
