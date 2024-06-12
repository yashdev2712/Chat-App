import React from 'react';
import Messages from './Messages';

function Message() {
    return (
        <div className='px-4 flex-1 overflow-auto custom-scrollbar'>
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
        </div>
    );
}

export default Message;
