import React from 'react';

import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import PlacesMap from './pages/PlacesMap';
import PlaceDetails from './pages/PlaceDetails';

import PlaceData from './pages/CreatePlace/PlaceData';
import SelectMapPosition from './pages/CreatePlace/SelectMapPosition';
import Header from './components/Header';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        
        <Screen
          name="SignIn"
          component={SignIn}
        />

        <Screen
          name="Dashboard"
          component={Dashboard}
        />

        <Screen
          name="PlacesMap"
          component={PlacesMap}
        />

        <Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{
            headerShown: true,
            header: () => <Header title='Informações' />
          }}
        />

        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title='Selecione no mapa' />
          }}
        />

        <Screen
          name="PlaceData"
          component={PlaceData}
          options={{
            headerShown: true,
            header: () => <Header title='Informe os dados' />
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}