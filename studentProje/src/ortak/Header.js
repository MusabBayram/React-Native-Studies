import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
  const{textStyle, viewStyle} = styles

    return(
      <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
      </View>
    );
};


const styles = {

  textStyle:{
    fontSize: 50,
    color: 'white',
  },

  viewStyle: {
    backgroundColor: 'black',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowOffset: {widht:0, height:2},
    shadowOpacity: 0.2,
  }
};


export default Header;
