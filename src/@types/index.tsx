import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
export { ChatListItemProps, IChatListItem } from './components/chat-list-item'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  Modal: undefined
  NotFound: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  camera: undefined
  chats: undefined
  status: undefined
  call: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >
