'use client'

import { useSession } from 'next-auth/react'
import { collection, orderBy, query } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';

type Props = {
  chatId: string;
}

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  const [messages] = useCollection(session && query(
    collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
    orderBy('createdAt', 'asc')
  ))

  return (
    <div className='flex-1'>
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  )
}

export default Chat
