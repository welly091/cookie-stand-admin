import Image from "next/image"

export default function ReportTable(props){
  if (props.loading) return <p>Loading...</p>
  if (Object.keys(props.reports).length  <= 0){
    return (
      <h2 className='text-md font-medium p-2'>No Cookie Stands Available</h2>
    )
  }else{
    //Calculate sum for each hour for all location
    let sum_hourly_list = []
    let total_sum = 0
    for(let i = 0; i < 14; i++){
      let sum = 0
      for(let j = 0; j < props.reports.length; j++){
        sum += props.reports[j].hourly_sales[i]
        
      }
      total_sum += sum
      sum_hourly_list[i]=sum
    }
    sum_hourly_list.push(total_sum)

    return( 
      <div className="flex flex-col items-center">
        <table className="w-1/2 my-3 rounded">
          <thead>
            <tr className="bg-emerald-400 text-sm">
              <th className="px-8">Location</th>
              {props.hours.map( (hour,index) =>(
                <th className="px-2" key={index}>{hour}</th>
              ))}
              <th className="px-3">Totals</th>
            </tr>
          </thead>
          <tbody>
            {
                props.reports.map((each_location, index) =>(
                  <tr className={"text-sm" + (index % 2 === 1 ? " bg-emerald-300": " bg-emerald-200" )} key={index}> 
                      <td className=" font-normal text-left border border-black font-semibold flex justify-between">&nbsp;&nbsp;{each_location.location}
                        <span onClick={() => onDelete(stand.id)}><Image src="/icons8-remove-48.png" /></span>
                      </td>
                        {each_location.hourly_sales.map((sale,index) =>(
                            <td className="px-2 border border-black font-semibold" key={index}>{sale}</td>
                        ))}
                      <td className="px-3 font-normal border border-black font-semibold">{each_location.hourly_sales.reduce((accumulator, currentValue) => accumulator + currentValue)}</td>
                    </tr>
                )
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <td className={"border border-black text-sm font-bold text-center bg-emerald-400"+ (sum_hourly_list.length % 2 === 1 ? " bg-emerald-400": " bg-emerald-300" )}>Total</td>
              {
                sum_hourly_list.map((each_sum, index) =>(
                  <td className={"border border-black text-sm font-bold text-center bg-emerald-400"+ (sum_hourly_list.length % 2 === 1 ? " bg-emerald-400": " bg-emerald-300" )} key={index}>{each_sum}</td>
                ))
              }
            </tr>
          </tfoot>
        </table>
      </div>
    )
    }
  }