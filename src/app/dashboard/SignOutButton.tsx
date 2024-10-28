"use client";
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded m-4"
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </button>
  );
}
export default SignOutButton;
