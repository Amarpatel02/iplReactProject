import { Route, Routes } from "react-router-dom"
import TeamDetails from "../teamdetailes/teamdetailes"




const PostLogin=()=>{

    return(
        

        <Routes>
        <Route path="/TeamDetails/:id" element={<TeamDetails />} />
        </Routes>
        
       

   )
}
export default PostLogin