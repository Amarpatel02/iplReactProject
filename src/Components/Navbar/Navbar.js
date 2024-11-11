import { Link, useNavigate } from "react-router-dom"
import "./Nav.css";
import { useContext, useState } from "react";
import { LoginInfo } from "../Navigation/navigation";


const Navbarr = () => {

  const navigate=useNavigate()

  const DataSing =useContext(LoginInfo)

  const [play, setplayer]=useState("")

  // const login =useContext(LoginInfo)


const handleform=(e)=>{

  e.preventDefault();

  navigate(`/Searchplayer?player=${play}`)
  
}

  const handleLogout=()=>{

    DataSing.singOut();
    navigate("/")
  }

  

  const handlebutton = () => {
      navigate(`/Searchplayer?player=${play}`);

  };

  const handlePlayers=(e)=>{

    setplayer(e.target.value)
    
  }

  return (
    <>
      <nav className="navbar navbar-light " id="navbarr">

        <Link to={"/"}><img src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png" width={"120px"} className="img" alt="ipl" /></Link>

        <form className="form-inline" onSubmit={handleform}>

          <input
            className="form-control mr-sm-5"
            id="input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={play}
            onChange={handlePlayers}/>
        {
          DataSing.login ? 
          <button id="btn" className="btn" type="submit" onClick={handlebutton} >
          Search
        </button> : <Link to={"/ErrorPage"}></Link>

        }
          {
            DataSing.login ?  <button id="btn" className="btn" type="submit" onClick={handleLogout}>
            Logout
          </button> : null
          }
        </form>
      </nav>
    </>
  )

}

export default Navbarr