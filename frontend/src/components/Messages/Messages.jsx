import React from 'react'

function Messages() {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src="https://avatar.iran.liara.run/public/42" alt="avatar image" />
        </div>
      </div>
      <div className={'chat-bubble text-white bg-blue-500'}>"Hii what's up?"</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Messages