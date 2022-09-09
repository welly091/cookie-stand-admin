export default function CreateForm(props){
    return(
      <form onSubmit={props.onSubmit} className="bg-emerald-300 rounded-md m-3 font-medium">
        <h2 className=' text-lg p-2 flex flex-col items-center'>Create Cookie Stand</h2>
        <div className='pl-3'>
          <label htmlFor='location' className='text-xs px-1 w-1/12'>Location</label>
          <input name="location" className='w-11/12 h-5'></input>
        </div>
        <div className='flex px-3 py-2'>
          <span className='px-1 py-1 m-1 bg-emerald-200 rounded'>
            <label htmlFor='minimum' className='text-xs flex flex-col items-center'>Minimum Customers per Hour</label>
            <input name="minimum" className=' h-5'></input>
          </span>
          <span className='px-1 py-1 m-1 bg-emerald-200 rounded'>
            <label htmlFor='maximum' className='text-xs flex flex-col items-center'>Maximum Customers per Hour</label>
            <input name="maximum" className='h-5 inline'></input>
          </span>
          <span className='px-1 py-1 m-1 bg-emerald-200 rounded'>
            <label htmlFor='average' className='text-xs flex flex-col items-center'>Average Cookies per Sale</label>
            <input name='average' className='h-5'></input>
          </span>
          <div className='px-1 py-1'>
            <button type="submit" className='text-sm bg-emerald-500 w-44 h-12 rounded'>Create</button>  
          </div>
        </div>
      </form>
    )
  }