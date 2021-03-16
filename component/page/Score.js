import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity

} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import LinearGradient from 'react-native-linear-gradient';
// import RNRestart from 'react-native-restart';
//  import Game  from '../page/Game';
const Score = (props) =>  {

  // const Abc = () =>{
  //   alert('Okkk')
  //   props.navigation.navigate('./Game')
  //   alert('Amar Sir')
  // }
     
  return (
   
      <View style={styles.containe}>
      <View style ={{alignItems:'center'}}>
      <Text style={{fontWeight:'bold',fontSize:29,color:'red'}}>GAME OVER</Text>
      </View>
      <View style={{alignItems:'center',marginTop:10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}} > score  :  {props.score}</Text>

      </View>
      <View style={styles.shadowsty}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Start')} style={styles.buton}>
      <LinearGradient colors={['#fa8466','#db0909',]} style={styles.gradient}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:22,}}>Restart</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>
      </View>
   

  );
};

const styles = StyleSheet.create({

  containe: {
    //  flex: 1,
    height:windowWidth/4,
    width:windowHeight/2,
    borderRadius:10,
    // borderWidth:1,
    // justifyContent: 'center',
    // alignItems: 'center',
      // backgroundColor: '#fff',
      backgroundColor: 'transparent',

  },
 buton:{
//    shadowOffset:{
// width:1,height:1
//    },
  //  shadowOpacity:1.5,
  //  shadowRadius:20,
//  shadowColor:'red',
      elevation:18,
  // justifyContent:'center',
  // backgroundColor:'#b5f4f5',
  alignSelf:'center',
  marginTop:35,
  //  alignItems:'center',
  // borderRadius:10,
  // borderWidth:1,
  height:windowHeight/7,
  width:windowWidth/7,
 
 },
// shadowsty:{
//   shadowOpacity:1,
//   shadowColor:'red'
// }
gradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems:'center',
  borderRadius: 25,
  // elevation:8,
},
});

export default Score;