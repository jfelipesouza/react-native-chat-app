import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Ionicons } from '@expo/vector-icons'

import TabOneScreen from '../screens/TabOneScreen'
import { RootTabParamList } from '../@types'
import TabTwoScreen from '../screens/TabTwoScreen'
import useColorScheme from '../hooks/useColorScheme'
import Theme from '../constants/Theme'
import ChatScreen from '../screens/ChatScreen'

const { Navigator, Screen } = createMaterialTopTabNavigator<RootTabParamList>()

const MaterialTopNavigator = () => {
  const colorScheme = useColorScheme()

  return (
    <Navigator
      tabBarPosition="top"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Theme[colorScheme].primary
        },
        tabBarInactiveTintColor: Theme[colorScheme].tabIconDefault,
        tabBarActiveTintColor: Theme[colorScheme].tint,
        tabBarPressOpacity: 0.1,
        tabBarPressColor: 'transparent',
        tabBarIndicatorStyle: {
          backgroundColor: Theme[colorScheme].secundary,
          height: 3
        },
        tabBarItemStyle: {
          width: 'auto'
        },
        tabBarLabelStyle: {
          fontSize: Theme[colorScheme].fontsize.headerTitle
        }
      }}
      initialRouteName={'chats'}
    >
      <Screen
        name="camera"
        component={TabOneScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="camera"
              color={Theme[colorScheme].tabIconSelected}
              size={Theme[colorScheme].fontsize.icons}
            />
          ),
          tabBarLabel: () => null,
          tabBarShowIcon: true
        }}
      />
      <Screen
        name="chats"
        component={ChatScreen}
        options={{
          title: 'Conversas'
        }}
      />
      <Screen
        name={'status'}
        component={TabTwoScreen}
        options={{
          title: 'Status'
        }}
      />
      <Screen
        name="call"
        component={TabTwoScreen}
        options={{
          title: 'Chamadas'
        }}
      />
    </Navigator>
  )
}

export default MaterialTopNavigator
