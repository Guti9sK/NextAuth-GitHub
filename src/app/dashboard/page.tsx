import { getServerSession } from "next-auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";

async function DashboardPage() {

  const session = await getServerSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome, {session?.user?.name}</h1>
      <p>Email: {session?.user?.email}</p>
      <Image
        src={session?.user?.image as string}
        width={200}
        height={200}
        alt="profile image"
        className="rounded-full my-4"
      />
      <SignOutButton />
    </div>
  );
}

export default DashboardPage;
