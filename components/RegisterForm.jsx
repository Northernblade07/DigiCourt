import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const RegisterForm = ({userType}) => {




  return (
    <section className='w-full flex flex-col items-center justify-center  gap-5'>
        <h1 className='text-4xl text-slate-400 font-bold mt-5'>Register as a {userType}</h1>
      <form action="" className="flex bg-slate-600 flex-col justify-center rounded-2xl p-3 items-center gap-3 h-full">
        <label className='text-white font-semibold text-3xl' htmlFor="">username</label>
          <Input className="p-1 m-1 w-100"  type={"text"} placeholder="enter you name"/>

          <label className='text-white font-semibold text-3xl' htmlFor="">email</label>
          <Input className="p-1 m-1 w-100"  type={"email"} placeholder="enter you email"/>



          <label className='text-white font-semibold text-3xl' htmlFor="">password</label>
          <Input  className="p-3 m-1 w-100 " type={"text"} placeholder="enter you password"/>

          <label className='text-white font-semibold text-3xl' htmlFor="">confirm password</label>
          <Input  className="p-3 m-1 w-100 " type={"text"} placeholder="confirm password"/>
{ userType==="Judge" && <>
          <label className='text-white font-semibold text-3xl '  htmlFor="">specialCode</label>
          <Input type={""} className="p-3 m-1 w-fit" placeholder="enter you name"/>
</>
}

<Button type="submit">Register now </Button>
      </form>
    </section>
  )
}

export default RegisterForm
