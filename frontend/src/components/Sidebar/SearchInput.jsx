import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../store/useConverstion';
import useGetConversation from "../../hooks/useGetConversation"
import toast from 'react-hot-toast';

function SearchInput() {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversation } = useGetConversation();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;

        const conversations = conversation.find((c) =>  c.fullName.toLowerCase().includes(search.toLocaleLowerCase()) )

        if(conversations){
            setSelectedConversation(conversations);
            setSearch("");
        }else toast.error("No such user found")
    }


    return (
        <>
            <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                <input type="text" placeholder='Search' value={search}
                    className='input input-bordered rounded-full '
                    onChange={(e) => setSearch(e.target.value)} />
                <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                    <FaSearch className='w-6 h-6 outline-none' />
                </button>
            </form>

        </>
    )
}

export default SearchInput