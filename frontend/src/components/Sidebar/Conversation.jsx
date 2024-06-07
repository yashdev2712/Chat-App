import React from 'react';

function Conversation() {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='h-8 w-8'> {/* Set container size */}
                        <img src="https://avatar.iran.liara.run/public/42" alt="user avatar" className='h-full w-full object-cover' /> {/* Adjust image size */}
                    </div>
                </div>
                <div className='flex flex-1 flex-col '>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>Yash</p>
                        <span className='text-xl'>😉️</span>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
    );
}

export default Conversation;
