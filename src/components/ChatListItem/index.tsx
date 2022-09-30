import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native'
import { ChatListItemProps } from '../../@types'
import Theme from '../../constants/Theme'
import useColorScheme from '../../hooks/useColorScheme'

export const ChatListItem: React.FC<
  ChatListItemProps & TouchableOpacityProps
> = ({ data: { lastMessage, user }, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Theme[colorScheme]

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: theme.background, borderColor: theme.primary }
      ]}
      {...props}
    >
      <View style={styles.avatar}>
        <Image
          source={{ uri: user.imageUrl }}
          style={styles.userImage}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          marginLeft: Theme.dark.space.xs
        }}
      >
        <View style={styles.topContainer}>
          <Text
            style={{
              fontSize: 16,
              color: theme.text,
              fontWeight: 'bold'
            }}
          >
            {user.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: theme.text
            }}
          >
            {lastMessage.createAt}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              color: theme.text
            }}
            numberOfLines={1}
          >
            {lastMessage.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: Theme.dark.space.sm,
    paddingVertical: Theme.dark.space.xs,
    borderBottomWidth: 1,
    marginVertical: 2
  },
  avatar: {
    width: Theme.dark.sizes.avatar,
    height: Theme.dark.sizes.avatar,
    position: 'relative'
  },
  userImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: Theme.dark.sizes.avatar
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  }
})
