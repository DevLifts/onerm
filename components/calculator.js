import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      reps: 0,
      weight: 0,
      oneRM: ""
    };
  }

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TextInput style={styles.textInput} />
        <Text style={styles.label}>Reps</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.label}>Weight</Text>
        <Text>{this.state.oneRM}</Text>
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
