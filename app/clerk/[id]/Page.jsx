"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Page = async({params}) => {
  const {data:session} = useSession();
  console.log(session);
  return (
    <div>
      clerk dashboard 1
    </div>
  )
}

export default Page
