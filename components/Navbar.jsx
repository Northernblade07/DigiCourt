"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  const handleSignOut = async()=>{
   try {
    await  signOut()   ;
   } catch (error) {
    console.log(error,"failed to signout")
   }
  }
   const {data:session} = useSession();
//   console.log(session?.user);
  return (
    <div className=' m-0 p-0 h-[5vh] w-full flex justify-between items-center'>

      <ul className='flex gap-5 '>
       <Link href={'/'}>
       <li>home</li>
       </Link> 
       {session?.user?.role ==="Judge" &&
       <Link href={`judge/${session?.user?.id}`}> <li>judge dashboard</li> </Link> 
       }

{session?.user?.role === "User" &&
       <Link href={`user/${session?.user?.id}`}> <li> user profile</li> </Link> 
       }

       
{session?.user?.role ==="Clerk" &&
       <Link href={`/clerk/${session?.user?.id}`}><li> clerk profile</li> </Link> 
       }

       {session?(
       <button onClick={handleSignOut}>  <li>logout</li> </button> 
       ):(
       <>
       <Link href={`/user-login`}>  <li>login</li> </Link> 
       {(session?.user?.role === "Judge" || session?.user?.role === "Clerk" || !session) &&
       <Link href={'/user-signup'}><li>register as User</li> </Link> 
       }

{(session?.user?.role === "User"|| !session) &&
       <Link href={'/judge-signup'}>   <li>register as Judge</li> </Link> 
       }


{(session?.user?.role === "User"|| session?.user?.role === "Judge" || !session) &&
       <Link href={'/clerk-signup'}>   <li>register as Clerk</li> </Link> 
       }
       </>
       )}

      </ul>
    </div>
  )
}

export default Navbar
