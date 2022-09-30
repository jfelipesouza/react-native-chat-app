import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { View } from 'react-native'

import useColorScheme from '../hooks/useColorScheme'
import Theme from '../constants/Theme'
import { RootStackParamList } from '../@types'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import MaterialTopNavigator from './MaterialTopNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  const colorScheme = useColorScheme()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={MaterialTopNavigator}
        options={{
          headerStyle: {
            backgroundColor: Theme[colorScheme].primary
          },
          headerShadowVisible: false,
          title: 'ChitChat',
          headerTitleStyle: {
            color: Theme[colorScheme].headerColor,
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
                size={Theme[colorScheme].fontsize.icons}
                color={Theme[colorScheme].headerColor}
                adjustsFontSizeToFit
                style={{
                  marginRight: Theme[colorScheme].space.md
                }}
              />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={Theme[colorScheme].fontsize.icons}
                color={Theme[colorScheme].headerColor}
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
