import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button } from './components/Buttons';
import { Display } from './components/Display';


const initialState = {

  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0

}

export default class App extends React.Component {

  state = { ...initialState }

  addDigi = n => {



    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) { return }

    const currentValue = clearDisplay ? '' : this.state.displayValue

    const displayValue = currentValue + n

    this.setState({ displayValue, clearDisplay: false })

    if (n != '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }

  }

  clearMemory = () => {

    this.setState({ ...initialState })

  }

  operation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    }
    else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.value[0]
      }

      values[1] = 0

      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })

    }
  }

  render() {
    return (

      <View style={styles.container} >
        <StatusBar barStyle='auto' />
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button text='AC' triple onClick={this.clearMemory} />
          <Button text='/' operation onClick={() => this.operation('/')} />
          <Button text='7' onClick={() => this.addDigi(7)} />
          <Button text='8' onClick={() => this.addDigi(8)} />
          <Button text='9' onClick={() => this.addDigi(9)} />
          <Button text='*' operation onClick={() => this.operation('*')} />
          <Button text='4' onClick={() => this.addDigi(4)} />
          <Button text='5' onClick={() => this.addDigi(5)} />
          <Button text='6' onClick={() => this.addDigi(6)} />
          <Button text='-' operation onClick={() => this.operation('-')} />
          <Button text='1' onClick={() => this.addDigi(1)} />
          <Button text='2' onClick={() => this.addDigi(2)} />
          <Button text='3' onClick={() => this.addDigi(3)} />
          <Button text='+' operation onClick={() => this.operation('+')} />
          <Button text='0' double onClick={() => this.addDigi(0)} />
          <Button text='.' onClick={() => this.addDigi('.')} />
          <Button text='=' operation onClick={() => this.operation('=')} />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
