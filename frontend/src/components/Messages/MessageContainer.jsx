import React from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

function MessageContainer() {
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            <>
                {/* <Header/> */}
                <div className='bg-slate-500 px-4 py-2 mb-2 '>
                    <span className='label-text '>To:</span>
                    <span className='text-gray-900'>Yash</span>
                </div>

                <Message />
                {/* <MessageInput /> */}
            </>
        </div>
    )
}

export default MessageContainer