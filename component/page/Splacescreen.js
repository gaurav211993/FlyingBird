import React from 'react';
import {
  StyleSheet,
  View,
Image

} from 'react-native';



const Splacescreen = ({navigation}) => {
    setTimeout(() =>{
        navigation.navigate('Login');
    },3000);
  return (
    <View style={styles.container}>
      <View >
<Image source={require('../image/images.jpg')}/>
</View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
    // position: 'absolute',
    resizeMode:'cover',
    overflow:'hidden',
    width:'100%',
    height:undefined,      
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'

  },
  
});

export default Splacescreen;