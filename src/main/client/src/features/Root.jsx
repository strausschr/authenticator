import { 
    Navigate,
    } from "react-router-dom"

export const Root = () => {
  
      return(
        <div>
        <Navigate to="/login" replace={true} />
      </div>
      )
    
  }
