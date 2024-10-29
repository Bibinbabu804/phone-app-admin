import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chat from './pages/Chat'
import Analytics from './pages/Analytics'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency ='₹'

const App = () => {

  const [token,setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token') : '')

  

   useEffect(()=>{

    localStorage.setItem('token',token)




   },[token])



  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>

      {token === ""

      ? <Login setToken={setToken} />

      :



      <>
      <Header setToken={setToken}/>
      <hr />

      <div className='flex w-full'>

        <Sidebar/>

        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-black text-base '>

          <Routes>

            <Route path='/add' element={<Add token={token} />} />

            <Route path='/list' element={<List token={token}/>} />

            <Route path='/orders' element={<Orders token={token}/>} />
            <Route path='/chat' element={<Chat/>} />
            <Route path='/analytics' element={<Analytics/>}/>






          </Routes>





        </div>


      </div>
      </>



      }

      
   




    </div>
  )
}

export default App