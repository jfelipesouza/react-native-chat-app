import { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ChatListItem } from '../../components/ChatListItem'
import useColorScheme from '../../hooks/useColorScheme'
import Theme from '../../constants/Theme'
import { IChatListItem } from '../../@types'

const ChatScreen: React.FC = () => {
  const colorScheme = useColorScheme()
  const theme = Theme[colorScheme]

  const message: IChatListItem = {
    chatRoomId: '1',
    user: {
      id: 'u1',
      name: 'Ana',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    lastMessage: {
      content: 'Hi! Thanks for last night',
      createAt: new Date().toLocaleDateString(),
      id: 'u3'
    }
  }
  const message2: IChatListItem = {
    chatRoomId: '2',
    user: {
      id: 'u2',
      name: 'Carla',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    lastMessage: {
      content: 'Hi! Thanks for last night. You are very funny',
      createAt: new Date().toLocaleDateString(),
      id: 'u4'
    }
  }
  const message3: IChatListItem = {
    chatRoomId: '3',
    user: {
      id: 'u3',
      name: 'Daniel',
      imageUrl:
        'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    lastMessage: {
      content: 'Hi! Happy birthday',
      createAt: new Date().toLocaleDateString(),
      id: 'u3'
    }
  }
  const data: IChatListItem[] = [message, message2, message3]

  const [chats, setChats] = useState<IChatListItem[]>(data)

  return (
    <>
      {chats.length === 0 ? (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <MaterialCommunityIcons
            name="message-off-outline"
            color={theme.text}
            size={theme.fontsize.notFoundIcon}
          />
          <Text
            style={{
              color: theme.text,
              fontSize: theme.fontsize.notFoundText,
              fontWeight: 'bold',
              marginTop: theme.space.sm
            }}
          >
            Nenhuma conversa encontrada
          </Text>
        </View>
      ) : (
        <FlatList
          data={chats}
          renderItem={({ item, index }) => <ChatListItem data={item} />}
          style={{ backgroundColor: theme.background }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
