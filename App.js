import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity

} from 'react-native';
// import Screen from './component/page/Screen';
import Start from './component/page/Start';
import Game from './component/page/Game';
import Login from './component/page/Login';
import Splacescreen from './component/page/Splacescreen';
import Score from './component/page/Score';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


 const Main = createStackNavigator();
const App = () => {
return (
   <>
 <NavigationContainer>
        <Main.Navigator >

        {/* <Main.Screen name="splacescreen" component={Splacescreen} 
        options= {{headerShown:false}}/>
        <Main.Screen name="Login" component={Login} 
        options= {{headerShown:false}}/> */}
          <Main.Screen name="Start" component={Start}
          options= {{headerShown:false}} />
          <Main.Screen name="Game" component={Game} 
          options= {{headerShown:false}}/>
           <Main.Screen name="Score" component={Score} 
          />
          {/* <Main.Screen name="Home" component={tabs} />
          <Main.Screen name="Home" component={MyDrawer}
         options= {{headerShown:false}}
          
          />
          <Main.Screen name="Otp" component={Otp} />
          {/* <Main.Screen name="ExampleOTP" component={ExampleOTP}/> */}
          {/* <Main.Screen name="InputOTPScreen" component={InputOTPScreen}/> */}
         </Main.Navigator> 


       </NavigationContainer> 
      
      {/* <Screen/> */}
   </>

  );
};

const styles = StyleSheet.create({
  
});

export default App;
