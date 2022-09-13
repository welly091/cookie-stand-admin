export default function CreateForm(props){
    return(
      <form onSubmit={props.onSubmit} className="bg-emerald-200 border border-emerald-400 rounded-md  font-medium w-[850px]">

        <div className='pl-3 flex mx-2 px-3 my-6'>
          <div className="w-2/3">
            <label htmlFor='location' className='text-xs font-bold px-1 flex flex-col items-center pb-2' >ADD LOCATION</label>
            <input name="location" className='mx-3 px-2 w-[500px]' placeholder="Cookie Stand Location"></input>
          </div>
          <div className="w-1/3" >
            <button type="submit" className='text-xs bg-emerald-500 h-[40px] w-[280px] rounded mt-2'>CREATE STAND</button>  
          </div>
        </div>

        <div className='flex justify-between mx-4 mb-3'>
          <span className='px-4'>
            <label htmlFor='minimum' className='text-xs font-bold flex flex-col items-center mb-2'>MINIMUM CUSTOMERS PER HOUR</label>
            <input name="minimum" className='w-[220px]'></input>
          </span>
          <span className='px-4 mx-4 '>
            <label htmlFor='maximum' className='text-xs font-bold flex flex-col items-center mb-2'>MAXIMUM CUSTOMERS PER HOUR</label>
            <input name="maximum" className='w-[220px]'></input>
          </span>
          <span className='px-4 '>
            <label htmlFor='average' className='text-xs font-bold flex flex-col items-center mb-2'>AVERAGE COOKIES PER SALE</label>
            <input name='average' className='w-[220px]'></input>
          </span>
          
        </div>
      </form>
    )
  }