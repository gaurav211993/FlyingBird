import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,

    TouchableOpacity,
    ImageBackground

} from 'react-native';

function Start(props) {
    return (
        <View >
            {/* <ImageBackground style={{
                flex: 1,

                // resizeMode: "cover",
                // justifyContent: "center",
                // alignItems:'center'
            }}
                source={require('../image/BG.png')} />

            {/* <Image style={{
                flex: 1,
                // paddingTop:10,
                // resizeMode: "cover",
                justifyContent: "center"
            }}
                source={require('../image/BGcopy.png')} /> */}

            <View>
                <ImageBackground
                    style={{ height: '100%', width: '100%' }}
                    source={require('../image/BG.png')} >

                    <Image style={{height:50,width:100,}}source={require('../image/C1.png')}/>

                    <Image style={{height:60,width:110,left:230,}}source={require('../image/C2.png')}/>
                    <ImageBackground style={{height:60,width:180,left:500,}}source={require('../image/C3.png')}/>
                    <Image style={{height:60,width:150,left:380,}}source={require('../image/C4.png')}/>


                    {/* <Image style={{height:190,width:190}}source={require('../image/bird.gif')}/> */}
                    <View style={{ flex: 1, bottom: 0, justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                        
                        <ImageBackground
                            style={{ height: 200, width: '100%' }}
                            source={require('../image/grass-2.png')} >
                                <View style={{flexDirection:'row'}}>
                                 <Image style={{height:170,width:70,}}source={require('../image/T7.png')} /> 
                                 <Image style={{height:170,width:70,left:80}}source={require('../image/T3.png')} /> 
                                 <Image style={{height:170,width:70,left:60,resizeMode:'contain',}}source={require('../image/T1.png')} /> 
                                 <Image style={{height:140,width:70,left:120,resizeMode:'contain',}}source={require('../image/T2.png')} /> 
                                   <Image style={{height:170,width:70,left:150}}source={require('../image/T1.png')} /> 
                                   {/* <Image style={{height:95,width:70,resizeMode:'contain',left:100}}source={require('../image/T4.png')} />  */}
                                   <Image style={{height:170,width:70,left:130}}source={require('../image/T5.png')} /> 
                                   <Image style={{height:150,resizeMode:'contain',width:70,}}source={require('../image/T6.png')} /> 
                                   <Image style={{height:'80%',resizeMode:'cover', position:'relative' ,width:70,left:60}}source={require('../image/T8.png')} /> 
                                   <Image style={{height:170,width:70,left:10}}source={require('../image/T9.png')} /> 
                                   <Image style={{height:110, resizeMode:'contain',width:70,right:350}}source={require('../image/T10.png')} /> 
                                   <Image style={{height:190,width:70,right:450}}source={require('../image/T3.png')} /> 
                                
                                   </View>
                            <Image
                                style={{ position: 'absolute', bottom: 0, height: 40, width: '100%' }}
                                source={require('../image/grass.png')} />
                        </ImageBackground>
                       
                    </View>
                </ImageBackground>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({

});

export default Start;
