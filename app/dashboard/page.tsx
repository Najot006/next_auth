"use client"
import { $api } from '@/api/interceptors'
import React from 'react'

const Dashboard = () => {
  const getBooks = () => {
    $api.get("/book").then(res => {
      console.log(res);
      
    })
  }
  return (
    <div>
      <h1  className='text-center mt-[50px] text-[40px]'>Dashboard</h1>
      <button onClick={getBooks} className='ml-[890px] w-[150px] h-[30px] border-2 ring-offset-zinc-300	rounded-md	'>Get Books</button>
    </div>
    
  )
}

export default Dashboard