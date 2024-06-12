import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/Messages/MessageContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
    '>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home