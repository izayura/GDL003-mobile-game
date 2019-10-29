import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';
import Home from './Home';
import Lafoo from './Lafoo';


export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            hidden: true
        }
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('./galaxyGame.png')} style={styles.background}>
                    <View style={{ alignItems: 'center', flex: 15 }}>
                        <Image source={require('./titleGame.png')} />
                    </View>
                    <View style={styles.lafoo}>
                        <Lafoo/>
                        </View>
                    <View style={styles.floor} />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#0ee4ed',
        fontSize: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    lafoo: {
        width: '20%',
        height: '20%',
        flexDirection: 'column',
        flex: 75,
        justifyContent: 'flex-end',
    },
    floor: {
        padding: 20,
        width: '100%',
        flex: 10,
        justifyContent: 'flex-end',
        backgroundColor: '#c60eed',
    },
});