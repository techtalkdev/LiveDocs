"use client";

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react';
import Header from './Header';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Editor } from './editor/Editor';
import Loader from './Loader';

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
    <ClientSideSuspense fallback={<Loader />}>
      <div className="collaborative-room">
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">Goals - 2025</p>
        </div>
        <SignedOut>
          <SignInButton />
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