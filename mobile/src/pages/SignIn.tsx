import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logo from '../images/voguia.png';

export default function SignIn() {
  const navigate = useNavigation();

  function handleSignIn() {
    navigate.navigate('Dashboard');
  }

 return (
   <View style={styles.container}>
     <Image source={logo} style={styles.logo} />
     <RectButton onPress={() => handleSignIn()} style={styles.button}>
      <AntDesign name="google" size={24} color="#0089a5" />
      <Text style={styles.text}>Entar como o Google</Text>
     </RectButton>
   </View>
 ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    height: 500,
    width: 250,
  },
  button: {
    flex: 1,
    backgroundColor:'#d8d8d8',
    paddingHorizontal: 30,
    paddingVertical: 20,

    flexDirection: 'row',
    alignItems: 'center',

    maxHeight: 70,
    borderRadius: 20,
  },
  text: {
    marginLeft: 15,
    color: '#0089a5',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
  }
})