import React from 'react'
import Clock from '../components/Clock'
import Loader from './Loader'

const Calendar = ({user}) => {
  return (
    <div >
      {user?.isAdmin ?<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
        <div className='card-header'>
          <a href='https://practise-pearl.vercel.app/' className='text-3xl text-center text-purple-400 underline	justify-items-center block mt-5 fs-1'>Go To Calendar</a>
          <Clock />
        </div>
      </div>
      :
      <Loader/>}

    </div>
  )
}

export default Calendar