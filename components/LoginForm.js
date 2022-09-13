export default function LoginForm(props){
    return(
        <form onSubmit={props.onSubmit} className="bg-emerald-200 rounded-md m-3 w-[600px] font-medium flex flex-col items-center border border-emerald-400">
            <label htmlFor="username" className="font-bold p-1 mt-4 ">USER NAME</label>
            <input name="username" placeholder="User Name" className="w-11/12"></input>
            <label htmlFor="password"  className="font-bold p-1" >PASSWORD</label>
            <input name="password" placeholder="password" className="w-11/12 mb-3"></input>
            <button type="submit" className='text-sm bg-emerald-500 m-5 rounded h-11 w-11/12'>SIGN IN</button>
        </form>
    )
    
}