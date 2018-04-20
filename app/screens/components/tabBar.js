import React from 'react'
import { Animated , StyleSheet } from 'react-native';
import { TabBarBottom } from 'react-navigation'
import { connect } from 'react-redux'

const TAB_BAR_OFFSET = 60;

class TabBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        offset: new Animated.Value(0),
      };
    }
  
    componentWillReceiveProps(props) {

     const status = props.status.open
  
      if ( !status) {
        Animated.timing(this.state.offset, { toValue: TAB_BAR_OFFSET, duration: 400 , useNativeDriver: true, }).start();
      } else {
        Animated.timing(this.state.offset, { toValue: 0, duration: 400 , useNativeDriver: true,   }).start();
      }
    }
  
    render() {

      return (
          <Animated.View style={[styles.container, { transform : [{ translateY : this.state.offset }] }]}>
            <TabBarBottom {...this.props} />
          </ Animated.View>
      );
    }
  }
  
const styles =  StyleSheet.create({
    container: {
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      elevation: 8,
    },
  });

  TabBar = connect((store) => {
    return {
       status : store.TabBar
    }
})(TabBar)

  export default TabBar