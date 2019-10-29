
import React from 'react';
import { Image, Animated, TouchableWithoutFeedback } from 'react-native';

export default class Lafoo extends React.Component {
    constructor(props) {
        super(props)
    
        this.moveAnimation = new Animated.ValueXY({ x: 10, y: 25 })
      }

      _moveCat = () => {
        Animated.spring(this.moveAnimation, {
          toValue: {x: 700, y: 25},
        }).start()
      }

    render(){
        return(
            <Animated.View style={[this.moveAnimation.getLayout()]}>
                <TouchableWithoutFeedback onPress={this._moveCat}>
<Image source={require('./lafooWalk.gif')} style={{flexDirection: 'column'}} />
     </TouchableWithoutFeedback>
       </Animated.View>
        )
    }
}