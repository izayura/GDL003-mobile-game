
import React from 'react';
import { Image, Animated, TouchableWithoutFeedback } from 'react-native';

export default class Lafoo extends React.Component {
    constructor(props) {
        super(props)
    
        this.moveAnimation = new Animated.ValueXY({ x: 10, y: 25 })
      }

      _moveCat = () => {
        Animated.spring(this.moveAnimation, {
          toValue: {x: 600, y: -15},
        }).start()
     
      }

    render(){
        Animated.timing(this.moveAnimation, {
            toValue: {x: 600, y: 25},
            delay: 500,
            duration: 4000
        }).start()
        return(
            <Animated.View style={[this.moveAnimation.getLayout()]}>
                <TouchableWithoutFeedback onPress={this._moveCat}>
<Image source={require('./lafooWalk.gif')} style={{flexDirection: 'column'}} />
     </TouchableWithoutFeedback>
       </Animated.View>
        )
    }
}