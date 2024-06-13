import React from 'react';
import MessageSkeleton from "../skeleton/messageSkeleton"
import useGetMessage from '../../hooks/useGetMessage';
import Messages from "../Messages/Messages"

function Message() {
    const { messages, loading } = useGetMessage();
    console.log(messages);
    return (
        <div className='px-4 flex-1 overflow-auto custom-scrollbar'>
            {
                !loading && messages.length > 0 && messages.map((message) => (
                    <Messages key={message._id} message={message} />))
            }

            {
                loading && [...Array(3)].map((_, id) => <MessageSkeleton key={id} />)
            }

            {
                !loading && messages.length === 0 &&
                (<p className='text-center'> Send a message to start the conversation</p>)
            }

        </div>
    );
}

export default Message;
