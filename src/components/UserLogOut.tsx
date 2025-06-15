"use client"

import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const UserLogOut = () => {
  return (
     <Button onClick={() => signOut()} variant="destructive">
      Log out
    </Button>
  )
}

export default UserLogOut