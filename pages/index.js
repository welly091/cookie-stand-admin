import Head from 'next/head'
import { useState } from 'react'
import CreateForm from '../components/CreateForm'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReportTable from '../components/ReportTable'
import {hours, reports} from '../data'

export default function Home() {

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

  return (
    <div>
      <Header/>
      <main className='flex flex-col items-center py-4 bg-emerald-50'>
        <CreateForm onSubmit={submitHandler}/>
        <ReportTable hours={hours} reports={reports}/>
      </main>
      <Footer reports={reports}/>
    </div>
  )
}