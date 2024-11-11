
import { Link, useNavigate } from "react-router-dom"
import Navbarr from "../Navbar/Navbar"
import Footer from "../footer/Footer"
import "./Homestyle.css"
import { useContext } from "react"
import { LoginInfo } from "../Navigation/navigation"



const HomeScreen = () => {
    const navigate = useNavigate()
    const { login } = useContext(LoginInfo)
    const username = useContext(LoginInfo)

    const Team = [{
        id: 1,
        Name: "RCB",
        bg: "rgb(191, 138, 21)",
        backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
        image: "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",

    }, {
        id: 2,
        Name: "SRH",
        bg: "rgb(241, 161, 46)",
        backgroundImage: "linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
        image: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",

    }, {
        id: 3,
        Name: "MI",
        bg: "rgb(9, 128, 181)",
        backgroundImage: "linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
        image: "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",

    }, {
        id: 4,
        Name: "CSK",
        bg: "rgb(237, 205, 22)",
        backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png"

    }, {
        id: 5,
        Name: "LSG",
        bg: "rgb(167, 67, 121)",
        backgroundImage: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        image: "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",

    }, {
        id: 6,
        Name: "KXIP",
        bg: "rgb(225, 56, 58)",
        backgroundImage: "(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
        image: "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",

    }, {
        id: 7,
        Name: "GI",
        bg: "rgb(119, 199, 242)",
        backgroundImage: "linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
        image: "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png"

    }, {
        id: 8,
        Name: "DC",
        bg: "rgb(201, 0, 6)",
        backgroundImage: "linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
        image: "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",

    }, {
        id: 9,
        Name: "RR",
        bg: "rgb(235, 131, 181)",
        backgroundImage: "linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
        image: "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",

    }, {
        id: 10,
        Name: "KKR",
        bg: "rgb(66, 37, 111)",
        backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image: "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",

    },
    ]

    const handldeclick = () => {
        if (!login) {
            alert("Please Login");
            navigate("/LoginScreen");
        }

    }

    const handlebtn = () => {

        navigate("/add")
    }

    const user = JSON.parse(localStorage.getItem("Details"))

    return (
        <>
            <Navbarr /> <br />

            {
                username.login ? <h3 style={{ marginLeft: 64 }}> Hello :  {user.username}</h3> : null

            }
            {

                username.login ? <button id="btn10" onClick={handlebtn}>Add Player</button> : null

            }

            <div className="mainDiv">
                {
                    Team.map((value, ind) => {

                        return (

                            <div key={value.ind}>



                                <Link to={login ? `/TeamDetails/${value.id} ` : "/Loginscreen"} id="link" onClick={() => { handldeclick(value.id) }} > <div style={{ backgroundColor: value.bg, backgroundImage: value.backgroundImage }} id="Container">


                                    <center > <img style={{ marginTop: "30px" }} src={value.image} alt="image" width={"140px"} height={"130px"} />
                                        <h4 id="h4">{value.Name}</h4></center>

                                </div>  </Link>
                            </div>

                        )

                    })
                }

            </div>
            <br />
            <Footer />
        </>
    )
}



export default HomeScreen