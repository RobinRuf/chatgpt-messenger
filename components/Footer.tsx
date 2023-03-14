'use client'

import { useSession, signOut } from 'next-auth/react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'

function Footer() {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col'>

      {/* Divider */}
      <hr className='pb-2 mx-2' />

      <div className='flex p-2 justify-between'>
        {/* Profile Image */}
        {session && (
          <img onClick={() => signOut()} src={session.user?.image!} alt='Profile Pic' className='h-12 w-12 rounded-full cursor-pointer hover:opacity-50' />
        )}

        {/* Greeting */}
        <div className='text-white hidden md:flex'>
          <p>Hello, <br/> {session?.user?.name!}</p>
        </div>

        {/* Settings */}
        <Link href={`/settings`}>
          <Cog6ToothIcon className='h-10 w-10 text-white cursor-pointer hover:opacity-50' />
        </Link>
      </div>
    </div>
  )
}

export default Footer
