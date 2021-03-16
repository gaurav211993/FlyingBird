import React from 'react';
import {
 
  View,
  Image,
ImageBackground
 
} from 'react-native';

const Obstacles = ({randomBottom,color,obstaclesLeft,obstacleWidth,obstacleHeight,gap}) => {

return(
<>

 {/* <View style={{
   position:'absolute',
   backgroundColor:color,
width:obstacleWidth,
height:obstacleHeight,
left:obstaclesLeft,
bottom:randomBottom + obstacleHeight + gap,

}}/>  */}

    <Image 
    style={{
       resizeMode:'contain',
        position:'absolute',
        backgroundColor:color,
     width:obstacleWidth,
     height:obstacleHeight,
     left:obstaclesLeft,
     bottom:randomBottom + obstacleHeight + gap,}}
    
   source={require('./image/Pole_01.png')}
    /> 
{/* <View style={{
   position:'absolute',
   backgroundColor:color,
width: obstacleWidth,
height: obstacleHeight,
left: obstaclesLeft,
bottom:randomBottom,

}}
 />  */}
      <Image style={{ 
   position:'absolute',
   resizeMode:'contain',
   backgroundColor:color,
width: obstacleWidth,
height: obstacleHeight,
left: obstaclesLeft,
bottom:randomBottom, 
}} source={require('./image/Pole_02.png')}/> 
</>
)

}
export default Obstacles