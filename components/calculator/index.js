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
      <View style={styles.viewContainer}>
        <View style={styles.viewContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              keyboardType="numeric"
              onChangeText={text => this.setReps(text)}
              placeholder="3"
              style={styles.textInput}
              textAlign={'center'}
              value={this.state.reps}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Reps</Text>
          </View>
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              keyboardType="numeric"
              onChangeText={text => this.setWeight(text)}
              style={styles.textInput}
              textAlign={'center'}
              value={this.state.weight}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Weight</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  actionContainer: {
    marginBottom: 5
  },
  textInputContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  textInput: {
    height: '100%',
    fontSize: 24,
    backgroundColor: 'white',
    borderRadius: 5
  },
  labelContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  label: {
    paddingBottom: 5,
    color: 'white'
  }
});

Calculator.propTypes = {
  oneRM: PropTypes.func.isRequired
};

export default Calculator;
