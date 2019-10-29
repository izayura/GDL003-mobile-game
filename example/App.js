import React from 'react';
import { StyleSheet, Image, View, TouchableHighlight, ImageBackground } from 'react-native';
import Game from './Game';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      start: false
    }
  }

  render() {
    
    return (
      this.state.start
        ? (
          <Game start={this.state.start} />
        )
        : <View style={styles.container}>
          <ImageBackground source={require('./galaxyPixels.png')} style={styles.background}>
            <Image style={styles.title} source={require('./title2.png')} />
            <TouchableHighlight onPress={() => { this.setState({ start: true }) }}>
              <Image style={styles.button} source={require('./button2.png')} />
            </TouchableHighlight>
          </ImageBackground>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2BB',
    color: '#405',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    height:300,
    width:600,
  },
  button:{
    height: 75,
  width:150,
  }
});