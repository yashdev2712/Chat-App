import React from 'react'
import {useAuthContext} from "../../context/AuthContext"
import useConversation from '../../store/useConverstion';

function Messages({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  const bubbleColor = fromMe ? "bg-blue-500" : "";


  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt="avatar image" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 ${bubbleColor}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Messages