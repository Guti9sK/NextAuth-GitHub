"use client";
import { signIn } from "next-auth/react";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login with Github</h1>

      <button className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded m-4"
        onClick={async () => {
          await signIn("github", { callbackUrl: "/dashboard/profile", redirect: false, });
        }}
      >Login</button>
    </div>
  );
}
export default LoginPage;
