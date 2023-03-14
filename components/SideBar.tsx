'use client'

import NewChat from '../components/NewChat'
import { useSession, signOut } from 'next-auth/react'
import { collection, query, orderBy } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import ChatRow from '../components/ChatRow'
import Footer from './Footer'

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session?.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
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
    <Footer />
  </div>
}
export default SideBar
