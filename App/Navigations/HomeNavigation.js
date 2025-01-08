import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';
import { TransitionPresets } from '@react-navigation/stack';
import Colors from '../Shared/Colors';

export default function HomeNavigation() {
  const isAndroid = true;
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen
        name="home-screen"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <Stack.Screen
        name="place-detail"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: Colors.WHITE,
            shadowColor: 'transparent',
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontSize: 14,
            fontFamily: 'raleway',
            color: Colors.BLACK,
          },
        }}
        component={PlaceDetail} screenOptions={{
          presentation: 'modal', 
        }}// Moved this here from `screenOptions`
      />
    </Stack.Navigator>
  );
}