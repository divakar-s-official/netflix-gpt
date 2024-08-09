import React, { useState } from 'react'
import Header from './Header'
import { checkValidateData } from './utils/validate'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true)
  const toggleSignInNow = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
            
        </div>
        <form className='absolute left-0 right-0 w-4/12 p-16 mx-auto my-24 text-white bg-black rounded-lg bg-opacity-70'>
          <h1 className='p-2 py-4 text-3xl font-bold'>{isSignInForm? "Sign in" : "Sign up"}</h1>
          {!isSignInForm && <input type="text" placeholder='Username' className='w-full p-4 m-2 border bg-opacity-80 bg-inherit placeholder:font-thin'/>}
          <input type="text" placeholder='Email Address' className='w-full p-4 m-2 border bg-opacity-80 bg-inherit placeholder:font-thin'/>
          <input type='password' placeholder='Password' className='w-full p-4 m-2 border bg-opacity-80 bg-inherit placeholder:font-thin'/>
          <button className='w-full p-2 m-2 my-6 bg-red-700 rounded' onClick={()=>{
            // validate
            checkValidateData(email, password)
            
          }}>Sign In</button>
          <div className='p-2 cursor-pointer hover:underline'><p onClick={toggleSignInNow}> {isSignInForm ? "New to Netflix ? Sign up now " : "Already registered? Sign in"}</p></div>
        </form>
    </div>
  )
}

export default Login