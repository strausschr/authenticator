import { 
  useLoaderData, 
} from "react-router-dom"

export function Welcome() {

  let {data} = useLoaderData()
    
  return (
    <>
  		<div>Hallo</div>
      <div>
      {data}
      </div>
      
    </>
  )
}
