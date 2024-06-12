import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';



function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, logIn } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(username, password)

  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-white-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-2">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
        </h1>
        <span className='w-full block text-center text-bold-500 text-xl'>
          ChatApp
        </span>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' value={username}
              onChange={(e) => { setUserName(e.target.value) }}
              className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className='w-full input input-bordered h-10' />
          </div>

          <Link to='/signup' className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
            Don't have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Log In"}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
