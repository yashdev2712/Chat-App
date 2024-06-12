import React from 'react';
import { BsSend } from "react-icons/bs";

function MessageInput() {
  return (
    <form className='relative px-4 my-3'>
      <div className='relative flex items-center'>
        <input
          type="text"
          className='border text-sm rounded-lg block w-full bg-gray-700 border-gray-600 text-white pr-10 pl-4 py-2'
          placeholder='Send a message'
        />
        <button
          type='submit'
          className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none'
        >
          <BsSend size={16} />
        </button>
      </div>
    </form>
  )
}
export default MessageInput;