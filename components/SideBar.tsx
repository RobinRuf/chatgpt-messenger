'use client'

import NewChat from '../components/NewChat'
import { useSession, signOut } from 'next-auth/react'

function SideBar() {
  const { data: session } = useSession();

  return <div className='p-2 flex flex-col h-screen'>
    <div className='flex-1'>
     <div>
        {/* NewChat */}
        <NewChat />

        <div> {/* ModelSelection */}
        </div>

          { /* Map through the Chat-Rows */}
      </div> 
    </div>

      {session && (
        <img onClick={() => signOut()} src={session.user?.image!} alt='Profile Pic' className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50' />
      )}
  </div>
}
export default SideBar
