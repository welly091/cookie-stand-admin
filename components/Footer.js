export default function Footer(props){
    return (
      <footer className='text-sm bg-emerald-500 px-5 py-3'>
        <div>{props.reports.length} Locations World Wide</div>
      </footer>
    )
  }