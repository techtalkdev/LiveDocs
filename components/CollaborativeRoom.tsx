'use client';

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import Loader from './Loader';
import { Editor } from './editor/Editor';
import Header from './Header';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

const CollaborativeRoom = () => {
  return (
          <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<Loader />}>
            <div className='collaborative-room'>
                <Header>
                    <div className='flex w-fit items-center justify-center gap-2'>
                        <p className='document-title'>Title</p>
                    </div>
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn> 
                </Header>
                <Editor />
            </div>
            </ClientSideSuspense>
      </RoomProvider>

  )
}

export default CollaborativeRoom