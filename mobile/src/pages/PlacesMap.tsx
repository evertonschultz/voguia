import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Place {
  id: string,
  name: string,
  latitude: number,
  longitude: number,
}

interface PlaceTypeRouteParams {
  type: string;
}

export default function PlacesMap() {
  const navigation = useNavigation();

  const [places, setPlaces] = useState<Place[]>([]);

  const route = useRoute()
  const params = route.params as PlaceTypeRouteParams;
  const type = params.type;

  useFocusEffect(() => {
    api.get(`/places/${params.type}`).then(response => {
      setPlaces(response.data);
    })
  });

  function handleNavigateToPlaceDetails(id: string) {
    navigation.navigate('PlaceDetails', { id });
  }

  function handleNavigateGoBackPlaces() {
    navigation.goBack();
  }

  function handleNavigateToCreatePlace() {
    navigation.navigate('SelectMapPosition', {type});
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -29.6747086,
          longitude: -52.7830354,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        {places.map(place => {
          return (
            <Marker
              key={place.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToPlaceDetails(place.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{place.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
        <RectButton style={styles.goBackPlaceButton} onPress={handleNavigateGoBackPlaces}>
          <MaterialIcons name="navigate-before" size={24} color="#fff" />
        </RectButton>
        <Text style={styles.footerText}>{places.length} lugares encontrados</Text>
        
        <RectButton style={styles.createPlaceButton} onPress={handleNavigateToCreatePlace}>
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get("window").height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    //marginRight: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3',
  },

  goBackPlaceButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  createPlaceButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  }
});
