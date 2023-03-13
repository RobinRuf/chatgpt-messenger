'use client'

import NewChat from '../components/NewChat'
import { useSession, signOut } from 'next-auth/react'
import { collection, query, orderBy } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import ChatRow from '../components/ChatRow'
import ModelSelection from './ModelSelection'

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
  );

  return <div className='p-2 flex flex-col h-screen'>
    <div className='flex-1'>
     <div>
        {/* NewChat */}
        <NewChat />

        {loading && (
          <div className='animate-pulse text-center text-white'>
            <p>Loading...</p>
          </div>
        )}

        { /* Map through the Chat-Rows */}
        {chats?.docs.map(chat => (
        <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div> 
    </div>

      {session && (
        <img onClick={() => signOut()} src={session.user?.image!} alt='Profile Pic' className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50' />
      )}
  </div>
}
export default SideBar
