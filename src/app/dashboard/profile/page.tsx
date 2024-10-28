"use client";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function ProfilePage() {

  const { data: session, status } = useSession();
  if (status === "loading") return <div>Loading...</div>

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Welcome, <strong>{session?.user?.name}.</strong></h1>
        <p>Email: {session?.user?.email}</p>
        <Image
          src={session?.user?.image as string}
          width={200}
          height={200}
          alt="profile image"
          className="rounded-full my-4"
        />
        <button className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded m-4" onClick={() => signOut()}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfilePage;
