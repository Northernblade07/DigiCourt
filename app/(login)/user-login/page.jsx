"use client"
import React from "react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useNotification } from "../components/Notification";
import Link from "next/link";

 const Page=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
//   const { showNotification } = useNotification();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(result)
    if (!result || !result.okk) {
      // You can log the actual error or show it to the user
      console.error("Login failed:", result?.error);
      router.push('/error'); // or show a toast instead
    } else {
      router.push("/clerk/1"); // or wherever you want
    }
  };


  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
   
         <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      {/* <Link href={'/clerk/1'}> */}
       <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
          Login
        </button>
          {/* </Link> */}
        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Page;