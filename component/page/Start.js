import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Start(props) {
  
  return (
    <View style={styles.container}>
      <View style={styles.but}>
     
        <TouchableOpacity style={styles.buton} onPress={() => props.navigation.navigate('Game')}>
          <LinearGradient colors={['#3ca832', '#92a832',]} style={styles.gradient}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22, }}>Play Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      {/* <Text>Gamestart</Text> */}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'

  },
  but: {
    height: '60%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // elevation:8,
  },
  buton: {
    elevation: 18,
    alignSelf: 'center',
    marginTop: 35,
    height: windowHeight / 7,
    width: windowWidth / 5,

  },
});

export default Start;
