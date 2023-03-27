import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const navigate = useNavigation();

  function handleNavigate(type: string) {
    navigate.navigate('PlacesMap', {type});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTile}>CATEGORIAS DE PESQUISA</Text>
        <RectButton style={styles.viewPlace} onPress={() => handleNavigate('all')}>
          <SimpleLineIcons name="magnifier" size={24} color="#0089a5" />
          <Text style={styles.textPlace}>Todos</Text>
          <MaterialIcons name="navigate-next" size={24} color="#0089a5" />
        </RectButton>
        <RectButton style={styles.viewPlace} onPress={() => handleNavigate('cafe')}>
          <Feather name="coffee" size={24} color="#0089a5" />
          <Text style={styles.textPlace}>Cafeterias</Text>
          <MaterialIcons name="navigate-next" size={24} color="#0089a5" />
        </RectButton>
        <RectButton style={styles.viewPlace} onPress={() => handleNavigate('restaurant')}>
          <MaterialIcons name="restaurant" size={24} color="#0089a5" />
          <Text style={styles.textPlace}>Restaurantes</Text>
          <MaterialIcons name="navigate-next" size={24} color="#0089a5" />
        </RectButton>
        <RectButton style={styles.viewPlace} onPress={() => handleNavigate('movie')}>
          <MaterialCommunityIcons name="popcorn" size={24} color="#0089a5" />
          <Text style={styles.textPlace}>Cinemas</Text>
          <MaterialIcons name="navigate-next" size={24} color="#0089a5" />
        </RectButton>
        <RectButton style={styles.viewPlace} onPress={() => handleNavigate('gym')}>
          <FontAwesome5 name="dumbbell" size={24} color="#0089a5" />
          <Text style={styles.textPlace}>Academias</Text>
          <MaterialIcons name="navigate-next" size={24} color="#0089a5" />
        </RectButton>
        <RectButton style={styles.viewPlace} onPress={() => handleNavigate('pharmacy')}>
          <MaterialCommunityIcons name="pharmacy" size={24} color="#0089a5" />
          <Text style={styles.textPlace}>Farmácias</Text>
          <MaterialIcons name="navigate-next" size={24} color="#0089a5" />
        </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
  },

  textTile: {
    color: '#0089a5',
    fontSize: 34,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 20,
  },

  viewPlace: {
    flex: 1,
    maxHeight: 70,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  textPlace: {
    color: '#0089a5',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
  },
});
