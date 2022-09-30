type User = {
  id: string
  name: string
  imageUrl: string
}

type Message = {
  id: string
  content: string
  createAt: string
}
export type IChatListItem = {
  chatRoomId: String
  user: User
  lastMessage: Message
}
export type ChatListItemProps = {
  data: IChatListItem
}
