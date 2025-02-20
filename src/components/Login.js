import React, { useState } from 'react'
import Header from "./Header"

const Login = () => {
  const [isSignIn, setisSignIn] =useState(true)
  const toggleisnowSignUp =() =>{
    setisSignIn(!isSignIn)

  }

  return (
    <div>
        <Header />
        <div  className='absolute'>
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg" 
        alt="problem"/>
        </div>
        <form className='absolute bg-black w-3/12 p-12 my-36 mx-auto left-0 right-0  rounded-lg bg-opacity-80 text-white '>
        <h1 className='font-bold text-3xl'>{isSignIn? "Sign In":"Sign up"}</h1>
        { !isSignIn && <input className='my-6 p-2 w-full bg-slate-700 rounded-sm' type='text' placeholder='Full Name '/>}
          <input className='my-6 p-2 w-full bg-slate-700 rounded-sm' type='text' placeholder='Example@gmail.com '/>
          <input className='my-6 p-2 w-full  bg-slate-700 rounded-sm' type='password' placeholder='password'/>
          <button className='bg-red-600 p-2 my-6 w-full rounded-sm'>{isSignIn ? "Sign in" : "Sign Up"}</button>
          <p >{isSignIn ? "New to Netflix?":"Alredy Registered?"} <span onClick={toggleisnowSignUp} className='cursor-pointer font-bold hover:underline'>{isSignIn? "Sign Up Now ":"Sign In Now"} </span></p>
        </form>

    </div>
  )
}

export default Login