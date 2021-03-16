import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,

} from 'react-native';
import Modal from 'react-native-modal'
 import Countup from 'react-native-countup'
import Bird from '../Bird'
import Obstacles from '../Obstacles';
import Score from './Score';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import LinearGradient from 'react-native-linear-gradient';
import RNRestart from 'react-native-restart';

function Game  ()  {

  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 10)
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
  const [score,setScore] = useState(0)
  const obstacleWidth = 60
  const obstacleHeight = 150
  const gap =170
  const gravity = 3
  let gameTimerId 
  let obstaclesLeftTimerId
  let obstaclesLeftTimerIdTwo
const  [isGameOver,setIsGameOver] = useState(false)


  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerId)
      }
    }
  }, [birdBottom])
  console.log(birdBottom) 

//jump 

  const jump = () => {
    if(!isGameOver && (birdBottom <screenHeight)){
      setBirdBottom(birdBottom => birdBottom + 50)
      console.log('jumped')
    }
  }

  //start first obstacles

  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerId)
      }
    } else {
      setObstaclesLeft(screenWidth)
      setObstaclesNegHeight(-Math.random() * 100)
      setScore(score => score +1 * 5)
    }


  }, [obstaclesLeft])

  //start second obstacles

  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo)
      }
    } else {
      setObstaclesLeftTwo(screenWidth)
      setObstaclesNegHeightTwo(-Math.random() * 100)
      setScore(score => score +1 * 5)
    }
  }, [obstaclesLeft])

  //check for collisions

  useEffect(() => {
    if (
      ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegHeight + obstacleHeight + gap -30)) &&
        (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30)
      )
      ||
      ((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap -30)) &&
        (obstaclesLeftTwo > screenWidth/2 -30 && obstaclesLeftTwo < screenWidth/2 + 30)
      ))
    {
       console.log('game over')
      // alert('game over')
      gameOver()
    }
  })

  // popup visible
  const [visibleModal , setVisibleModal] = useState(false);
  const modalDisplay =() =>{
    setVisibleModal(!visibleModal);
  };
  const onButtonClick = () => {
    RNRestart.Restart();
  };

  const gameOver = () => {
    clearInterval(gameTimerId)
    clearInterval(obstaclesLeftTimerId)
    clearInterval(obstaclesLeftTimerIdTwo)
    setIsGameOver(true)
    setVisibleModal(true)
  }

  // const gameStart =() =>{
  //   gameOver()
  // }
  return (
  <SafeAreaView>
    <StatusBar
    hidden={true}
    />
    <TouchableWithoutFeedback onPress={jump }>
       <ImageBackground 
        style={{ height: '100%', width: '100%' }}
       source={require('../image/BG.png')}>
    <View style={styles.container}>
      
    {/* <Countup value={100000}/>  */}
    {/* <View style={{height:'10%',width:'10%',borderWidth:1,borderColor:'#fff',marginBottom:'40%',marginLeft:'80%',borderRadius:5}}> */}
   
   {/* {isGameOver && <Text style={{alignSelf:'center',fontSize:80}}>Score{score}</Text>} */}
   {/* <Text style={{alignSelf:'center',fontSize:80}}>Score{score}</Text> */}
   {/* </View>  */}
   {/* {isGameOver && <Score/>} */}
      <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
      <Obstacles
        //  color={'yellow'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}
        randomBottom={obstaclesNegHeight}
      />
      <Obstacles
        //  color={'green'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeftTwo}
        randomBottom={obstaclesNegHeightTwo}
      />
    {isGameOver}
   
   {/* popup */}
   <Modal isVisible = {visibleModal}>
          <View style={styles.contain}>
            <View style ={{alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:29,color:'red'}}>GAME OVER</Text>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:'bold'}} > score = {score}</Text>
            </View>
            <View style={styles.shadowsty}>
            <TouchableOpacity onPress={onButtonClick} style={styles.buton}>
            <LinearGradient   colors={['#fa8466','#db0909',]} style={styles.gradient}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:22,}}>Restart</Text>
            </LinearGradient>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
          {/* popup end */}
    </View>

         

    </ImageBackground>
    </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    //  flex: 1,
    height:windowHeight/2,
    width:windowWidth/3,
    borderRadius:10,
    padding:10,
    // borderWidth:1,
    alignSelf:'center',
     backgroundColor: '#fff',
    //  backgroundColor: 'transparent',

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

export default Game;
