"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    const {user} =  useUser()
    console.log(user)
    if(!user){
        return <div>Loading...</div>
    }
  return (
    <h1>{user?.username}</h1>
  )
}

export default page