
import { Route, Routes } from "react-router-dom"
import HomeScreen from "../HomeScreen/Homescreen"
import LoginScreen from "../Loginscreen"
import TeamDetails from "../teamdetailes/teamdetailes"
import RegisterScreen from "../Registerscreen"
import Searchplayer from "../searchplayer/searchplayer"
import ErrorPage from "../Navbar/errorpage"
import AddPlayers from "../addplayes/addplayes"


const PreLogin=()=>{

    return(
       
        <Routes>
        <Route path="/" element={<HomeScreen/>}/> 
        <Route path="/LoginScreen" element={<LoginScreen/>}/> 
        <Route path="/TeamDetails/:id" element={<TeamDetails />} />
        <Route path="/Register" element={<RegisterScreen/>}/>
        <Route path="/Searchplayer" element={<Searchplayer/>}/>
        <Route path="/ErrorPage" element={<ErrorPage/>}/>
        <Route path="/add" element={<AddPlayers/>}/>
        </Routes>
    )
}
export default PreLogin

