export default function Header({onClick, name}){
    return(
      <header className='bg-emerald-500 p-3 flex justify-between'>
        <div className="text-2xl font-medium inline">Cookie Stand Admin</div>
        <div>
        <button className="bg-emerald-100 rounded px-2 m-1 h-5 text-xs font-medium ">{name}</button>
          <button className="bg-emerald-600 rounded px-2 m-1 h-5 text-xs font-normal text-slate-50" onClick={onClick} >Sign Out</button>
          <button className="bg-emerald-50 rounded px-2 m-1 h-5 text-xs font-medium ">Overview</button>
        </div>
        
      </header>
    )
  }