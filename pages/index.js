import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const[data, setData] = useState()

  function submitHandler(event){
    event.preventDefault();
    setData({
      "location": event.target.location.value,
      "minCustomers": event.target.minimum.value,
      "maxCustomers": event.target.maximum.value,
      "avgCookies": event.target.average.value
    })
  }

  return (
    <div>
      <Header/>
      <main className='flex flex-col items-center py-4 bg-emerald-50'>
        <Form onSubmit={submitHandler}/>
        <Result data={data}/>
      </main>
      <Footer copyright="2021"/>
    </div>
  )
}

function Header(){
  return(
    <header className='text-2xl bg-emerald-500 px-5 py-3 font-medium'>
      <h3>Cookie Stand Admin</h3>
    </header>
  )
}

function Footer(props){
  return (
    <footer className='text-sm bg-emerald-500 px-5 py-3'>
      <div>&copy;{props.copyright}</div>
    </footer>
  )
}

function Form(props){
  return(
    <form onSubmit={props.onSubmit} className="bg-emerald-300 h-38 w-8/12 rounded-md m-3">
      <h2 className='font-medium text-lg p-2 flex flex-col items-center'>Create Cookie Stand</h2>
      <div className='py-2'>
        <label htmlFor='location' className='text-xs px-1 w-1/12'>Location</label>
        <input name="location" className='w-11/12 h-5 bg-slate-200'></input>
      </div>
      <div className='flex py-1'>
        <span className='p-2'>
          <label htmlFor='minimum' className='text-xs flex flex-col items-center'>Minimum Customers per Hour</label>
          <input name="minimum" className=' h-5'></input>
        </span>
        <span className='p-2'>
          <label htmlFor='maximum' className='text-xs flex flex-col items-center'>Maximum Customers per Hour</label>
          <input name="maximum" className='h-5 inline'></input>
        </span>
        <span className='p-2'>
          <label htmlFor='average' className='text-xs flex flex-col items-center'>Average Cookies per Sale</label>
          <input name='average' className='h-5'></input>
        </span>
        <div className='p-1'>
          <button type="submit" className='text-sm bg-emerald-500 w-48 h-12'>Create</button>  
        </div>
      </div>
    </form>
  )
}
function Result(props){
  return(
    <div className="flex flex-col items-center">
      <div className='text-sm p-2'>Report Table Coming Soon...</div>
      <div className='text-sm p-1'>{JSON.stringify(props.data)}</div>
    </div>
  )
}