import React from 'react'

const Navbar = () => {
  return (
    <div className=' m-0 p-0 h-[5vh] w-full flex justify-between items-center'>
      Navbar
      <ul className='flex gap-5 '>
        <li>home</li>
        <li>dashboard</li>
        <li>login</li>
        <li>register</li>
      </ul>
    </div>
  )
}

export default Navbar
