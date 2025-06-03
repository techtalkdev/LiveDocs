'use client';

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import Loader from './Loader';
import { Editor } from './editor/Editor';
import Header from './Header';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import ActiveCollaborators from './ActiveCollaborators';

const CollaborativeRoom = ({ roomId, roomMetadata }: CollaborativeRoomProps) => {
  return (
          <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<Loader />}>
            <div className='collaborative-room'>

                <Header>
                    <div className='items-center justify-center gap-2'>
                        <p className='document-title'>Title</p>
                    </div>
                    <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
                        <ActiveCollaborators />
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn> 
                    </div>
                </Header>
                <Editor />
            </div>
            </ClientSideSuspense>
      </RoomProvider>

  )
}

export default CollaborativeRoom