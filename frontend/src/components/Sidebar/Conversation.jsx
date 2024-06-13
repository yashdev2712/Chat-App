import React from 'react';
import useConversation from '../../store/useConverstion';

function Conversation({ conversation, lastIdx }) {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
            ${isSelected ? "bg-sky-500" : ""}
            `} onClick={() => { setSelectedConversation(conversation) }}>

                <div className='avatar online'>
                    <div className='h-8 w-8'>
                        <img src={conversation.profilePic} alt="user avatar" className='h-full w-full object-cover' />
                    </div>
                </div>
                <div className='flex flex-1 flex-col '>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    );
}

export default Conversation;
