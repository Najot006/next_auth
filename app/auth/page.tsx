import Link from 'next/link'
import React from 'react'

const Auth = () => {
  return (
    <div>
      <h1 className='text-center mt-[50px] text-[40px]'>Auth page</h1>
      <Link href="/auth/signUp" className='ml-[899px] text-orange-400	text-[20px] mt-[10px]'>SignUp page</Link>
      <div className='w-[200px] h-[1px] ml-[860px] bg-black mt-[5px]'></div>
    </div>
  )
}

export default Auth