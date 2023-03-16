import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Error404 from '../Error/Error404'
import FlashCardsDetails from '../FlashCards/FlashCardsDetails'
import MyFlashCards from '../FlashCards/MyFlashCards'
import CreateFlashCards from './CreateFlashCards'

const FlashCardsHome = () => {
  return (
    <div className=" bg-red-50 min-h-screen p-1 dark:bg-[#0d1117]">
      <div className='m-auto  w-4/5'>
        <h1 className='font-bold my-5 text-lg dark:text-white'>Create Flashcard</h1>

        <div className='flex ' >
          <div className='m-2 flex  items-center w-[100px]' >
            {/* created navlink to navigate between Create New page to My Flashcard page */}
            <NavLink to='/'>
              <button className="font-bold dark:bg-gray-300 rounded-md " >
                Create New
              </button>
            </NavLink>
          </div>

          <div className='m-2 flex  items-center w-[110px]' >

            <NavLink to='/myflashcard' >
              <button className="font-bold dark:bg-gray-300 rounded-md " >
                My Flashcard
              </button>
            </NavLink>
          </div>
        </div>

        <hr className="border bg-black-700 mt-[-10px] border-gray-300" />
        {/* adding routes  */}
        <Routes>
          <Route>
            <Route index path='/' element={<CreateFlashCards />} />
            <Route path='/myflashcard' element={<MyFlashCards />} />
            <Route path='/flashcardsdetails/:id' element={<FlashCardsDetails />} />
            {/* if path is not match it will shows Error404 component */}
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>


      </div>
    </div>
  )
}

export default FlashCardsHome
