import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';



const Bird = ({ birdBottom, birdLeft }) => {

    const birdWidth = 60
    const birdHeight = 60
    return (

        <>
            {/* style={{ position:'absolute', */}

            {/* //  backgroundColor:'blue',
//   width:birdWidth,
//   height:birdHeight,
//   left:birdLeft -(birdWidth/2),
//   bottom:birdBottom - (birdHeight/2),}}> */}
            <Image style={{
                //  backgroundColor:'blue',
                position: 'absolute',
                width: birdWidth,
                height: birdHeight,
                left: birdLeft - (birdWidth / 2),
                bottom: birdBottom - (birdHeight / 2)
            }} source={require('./image/bird.gif')} />

        </>

    );
};

const styles = StyleSheet.create({
    //  bird:{
    //      position:'absolute',
    //      backgroundColor:'blue',
    //      width:50,
    //      height:40,
    //      left:birdleft,
    //      bottom:birdBottom,

    //  }
    bi: {
        height: 30,
        width: 40,
        backgroundColor: 'red'
    }
});

export default Bird;
