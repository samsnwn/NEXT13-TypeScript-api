"use client"

import { signIn, signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import Button from './ui/Button'
import { toast } from './ui/Toast'

interface SignOutButtonProps {
  
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const SignUserOut = async () => {
    setIsLoading(true)

    try {
      await signOut()
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again!",
        type: "error"
      })
    }

  }



  return <Button onClick={SignUserOut} isLoading={isLoading}>Sign Out</Button>
}

export default SignOutButton