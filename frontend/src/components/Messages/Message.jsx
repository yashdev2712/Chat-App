import React, { useEffect, useReducer, useRef } from 'react';
import MessageSkeleton from "../skeleton/messageSkeleton"
import useGetMessage from '../../hooks/useGetMessage';
import Messages from "../Messages/Messages"

function Message() {
    const { messages, loading } = useGetMessage();
    const lastMessage = useRef();

    useEffect(() => {
        setTimeout(() => { lastMessage.current?.scrollIntoView({ behavior: "smooth" }) }, 100)
    }, [messages]);

    return (
        <div className='px-4 flex-1 overflow-auto custom-scrollbar'>
            {
                !loading && messages.length > 0 && messages.map((message) => (
                    <div key={message._id} ref={lastMessage}>
                        <Messages message={message} />
                    </div>
                ))
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
