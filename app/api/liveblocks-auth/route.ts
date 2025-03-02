import { liveblocks } from "@/lib/liveblocks";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";




export async function POST(request: Request) {
    const clerkUser = await currentUser();
    if(!clerkUser) redirect('/sign-in');
  // Get the current user from your database
  const user ={
    id: clerkUser?.id,
    info:{

    }
  };

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.id,
      groupIds, // Optional
    },
    { userInfo: user.metadata },
  );

  return new Response(body, { status });
}