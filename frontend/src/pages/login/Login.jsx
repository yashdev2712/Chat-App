import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-white-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-2">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
        </h1>
        <span className='w-full block text-center text-bold-500 text-xl'>
          ChatApp
        </span>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>

          <a href='#' className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
            Don't have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
