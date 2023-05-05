import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className=''>
            <div>
            <h1>Sign In</h1>
            <form>
                <label>
                    Username
                </label>
                <input
                type="text"
                className='border border-spacing-1'
                ></input>
                <button className='w-full bg-purple-500 text-white rounded-[30px]'>Sign In</button>
            </form>
            </div> 
        </div>
    </div>
  )
}

export default SignIn