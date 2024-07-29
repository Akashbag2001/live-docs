import React from 'react'
import { SignIn } from '@clerk/nextjs'

function SignUp() {
  return (
    <main className='auth-page'>
      <SignIn/>
    </main>
  )
}

export default SignUp
