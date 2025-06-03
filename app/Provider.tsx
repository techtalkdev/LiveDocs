'use client';
import { ReactNode } from "react";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider 
        authEndpoint= '/api/liveblocks-auth'  
        resolveUsers={async ({ userIds }) => {
          const users = await getClerkUsers({userIds});
          return users;
        }}
        /*publicApiKey={"pk_dev_1sU7B3LQwcR1T6Ody5Zlj7hc-KhmvEArMIO4UfoSVq0WYCOpn-vMqoVILPev1mnZ"} */
        > 
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider