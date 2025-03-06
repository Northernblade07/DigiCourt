import React from 'react'

const page = async({params}) => {
  const id = (await params).id;
  console.log(id)
  return (
    <div>
      111
    </div>
  )
}

export default page
