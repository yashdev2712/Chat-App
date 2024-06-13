import React from 'react';
import Conversation from './Conversation';
import useGetConversation from '../../hooks/useGetConversation';

function Conversations() {
    const { loading, conversation } = useGetConversation();

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversation && conversation.length > 0 ? (
                conversation.map((conversationItem, idx) => (
                    <Conversation
                        key={conversationItem._id}
                        conversation={conversationItem}
                        lastIdx={idx === conversation.length - 1}
                    />
                ))
            ) : null}

            {loading ? <span className='loading loading-spinner'></span> : null}
        </div>
    );
}

export default Conversations;
