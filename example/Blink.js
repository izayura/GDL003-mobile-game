import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  
  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    const styles = StyleSheet.create({
        title: {
          color: '#0ee4ed',
          fontSize: 20,
          borderRadius: 4,
        },
      });
    return (
      <Text style={styles.title}>{this.props.text}</Text>
    );
  }
}

export default Blink;