import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Calculator extends React.Component {
  state = {
    reps: '',
    weight: ''
  };

  setReps = text => {
    this.setState({ reps: text });
    setTimeout(() => {
      this.oneRM();
    }, 100);
  };

  setWeight = text => {
    this.setState({ weight: text });
    setTimeout(() => {
      this.oneRM();
    }, 100);
  };

  oneRM = () => {
    const { reps, weight } = this.state;
    if (reps && weight) {
      this.props.oneRM(reps, weight);
    }
  };

  // TODO - add debounce to text inputs
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TextInput
          keyboardType="numeric"
          onChangeText={text => this.setReps(text)}
          placeholder="3"
          style={styles.textInput}
          textAlign={'center'}
          value={this.state.reps}
        />
        <Text style={styles.label}>Reps</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={text => this.setWeight(text)}
          style={styles.textInput}
          textAlign={'center'}
          value={this.state.weight}
        />
        <Text style={styles.label}>Weight</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 24,
    padding: 5,
    width: 100,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5
  },
  label: {
    marginBottom: 15,
    color: 'white'
  }
});

Calculator.propTypes = {
  oneRM: PropTypes.func.isRequired
};

export default Calculator;
