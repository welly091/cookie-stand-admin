import Head from 'next/head'
import { useState, useEffect } from 'react'
import CreateForm from '../components/CreateForm'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieStandTable from '../components/CookieStandTable'
import LoginForm from '../components/LoginForm'
import useResource from '../hooks/useResource'
import {hours, reports} from '../data'
import { useAuth } from '../contexts/auth'

export default function Home() {

  const {user, login, logout} = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();

  const[data, setData] = useState([])

  function submitHandler(event){
    event.preventDefault();
    const newData = {
      "location": event.target.location.value,
      "minCustomers": event.target.minimum.value,
      "maxCustomers": event.target.maximum.value,
      "avgCookies": event.target.average.value
    }
    setData([...data, newData])
  }

  function handleLogin(event){
    event.preventDefault();
    login(event.target.username.value,event.target.password.value)
  }
  

  return (
    <div>
      {user ? (
        <>
        <Header onClick={logout} name={user.username}/>
        <main className='flex flex-col items-center py-4 bg-emerald-50'>
          <CreateForm onSubmit={submitHandler}/>
          <CookieStandTable hours={hours} reports={resources} loading={loading} onDelete={deleteResource}/> 
        </main>
        <Footer reports={resources} loading={loading}/>
        </>
      ):(
        <>
          <LoginForm onSubmit={handleLogin}/>
        </>
        
      )}
      
      
    </div>
  )
}