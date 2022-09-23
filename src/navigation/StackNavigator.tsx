import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { View } from 'react-native'

import useColorScheme from '../hooks/useColorScheme'
import Colors from '../constants/Colors'
import { RootStackParamList } from '../types'
import BottomTabNavigator from './BottomTabNavigator'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  const colorScheme = useColorScheme()

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerStyle: {
            backgroundColor: Colors[colorScheme].primary
          },
          title: 'ChitChat',
          headerTitleStyle: {
            color: Colors[colorScheme].headerColor,
            fontWeight: 'bold'
          },
          headerTitleAlign: 'left',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <Feather
                name="search"
                size={Colors[colorScheme].fontsize.icons}
                color={Colors[colorScheme].headerColor}
                adjustsFontSizeToFit
                style={{
                  marginRight: Colors[colorScheme].space.md
                }}
              />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={Colors[colorScheme].fontsize.icons}
                color={Colors[colorScheme].headerColor}
                adjustsFontSizeToFit
              />
            </View>
          )
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
