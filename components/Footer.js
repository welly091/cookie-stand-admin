export default function Footer(props){
  if (props.loading) return <p>Loading...</p>
    return (
      <footer className='text-sm bg-emerald-500 px-5 py-3 flex flex-col items-center'>
        <div>{props.reports.length} Locations World Wide</div>
      </footer>
    )
  }