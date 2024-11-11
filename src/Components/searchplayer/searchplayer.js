import { useContext, useEffect, useState } from "react"
import { LoginInfo } from "../Navigation/navigation"
import { useLocation } from "react-router-dom";
import "./searchplayer.css"
import { Player } from "../playersData/playerDetails";


const Searchplayer = () => {

    const [playerDetails, setPlayerDetails] = useState(null);

    const login = useContext(LoginInfo);

    const location = useLocation();

    // let playerData = [[{

    //     name: "Virat kohli",
    //     age: "35",
    //     Ipl: "7263",
    //     Matches: "237",
    //     Wickets: "4",
    //     bg: "rgb(191, 138, 21)",
    //     backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
    //     image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png"
    // }, {

    //     name: " Faf du Plessis",
    //     age: "39",
    //     Ipl: "4133",
    //     Matches: "130",
    //     Wickets: "0",
    //     bg: "rgb(191, 138, 21)",
    //     backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
    //     image: "https://rbrgloblesolution.in/IPLT2022/images/rcb/faf.png"
    // }, {

    //     name: "Glenn Maxwell",
    //     age: "35",
    //     Ipl: "2719",
    //     Matches: "124",
    //     Wickets: "31",
    //     bg: "rgb(191, 138, 21)",
    //     backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png"
    // }, {

    //     name: "Mohammed Siraj",
    //     age: "29",
    //     Ipl: "97",
    //     Matches: "79",
    //     Wickets: "78",
    //     bg: "rgb(191, 138, 21)",
    //     backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
    //     image: "https://rbrgloblesolution.in/IPLT2022/images/rcb/siraj.png"
    // }, {

    //     name: "Dinesh Karthik",
    //     age: "38",
    //     Ipl: "4516",
    //     Matches: "242",
    //     Wickets: "0",
    //     bg: "rgb(191, 138, 21)",
    //     backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
    //     image: "https://rbrgloblesolution.in/IPLT2022/images/rcb/dinesh.png"
    // }], [{

    //     name: " Aiden Markram",
    //     age: "29",
    //     Ipl: "775",
    //     Matches: "33",
    //     Wickets: "2",
    //     bg: "rgb(241, 161, 46)",
    //     backgroundImage: "linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/287.png"
    // }, {

    //     name: " Rahul Tripathi",
    //     age: "32",
    //     Ipl: "2071",
    //     Matches: "89",
    //     Wickets: "0",
    //     bg: "rgb(241, 161, 46)",
    //     backgroundImage: "linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/188.png"
    // }, {

    //     name: "Abhishek Sharma",
    //     age: "23",
    //     Ipl: "892",
    //     Matches: "47",
    //     Wickets: "9",
    //     bg: "rgb(241, 161, 46)",
    //     backgroundImage: "linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/212.png"
    // }, {

    //     name: "T Natarajan",
    //     age: "32",
    //     Ipl: "3",
    //     Matches: "47",
    //     Wickets: "48",
    //     bg: "rgb(241, 161, 46)",
    //     backgroundImage: "linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/224.png"
    // }, {

    //     name: "Bhuvneshwar Kumar",
    //     age: "33",
    //     Ipl: "283",
    //     Matches: "160",
    //     Wickets: "170",
    //     bg: "rgb(241, 161, 46)",
    //     backgroundImage: "linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/15.png"
    // }], [{

    //     name: " Rohit Sharma",
    //     age: "36",
    //     Ipl: "6211",
    //     Matches: "243",
    //     Wickets: "15",
    //     bg: "rgb(9, 128, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png"
    // }, {

    //     name: "Suryakumar Yadav",
    //     age: "33",
    //     Ipl: "3249",
    //     Matches: "139",
    //     Wickets: "0",
    //     bg: "rgb(9, 128, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png"
    // }, {

    //     name: "Ishan Kishan",
    //     age: "35",
    //     Ipl: "2324",
    //     Matches: "91",
    //     Wickets: "0",
    //     bg: "rgb(9, 128, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png"
    // }, {

    //     name: "N. Tilak Varma",
    //     age: "29",
    //     Ipl: "25",
    //     Matches: "740",
    //     Wickets: "0",
    //     bg: "rgb(9, 128, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/993.png"
    // }, {

    //     name: "Piyush Chawla",
    //     age: "38",
    //     Ipl: "609",
    //     Matches: "174",
    //     Wickets: "179",
    //     bg: "rgb(9, 128, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/149.png"
    // }], [{

    //     name: " Ravindra Jadeja",
    //     age: "35",
    //     Ipl: "2692",
    //     Matches: "226",
    //     Wickets: "152",
    //     bg: "rgb(236, 202, 24)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png"
    // }, {

    //     name: "MS Dhoni",
    //     age: "39",
    //     Ipl: "5082",
    //     Matches: "250",
    //     Wickets: "0",
    //     bg: "rgb(236, 202, 24)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png"
    // }, {

    //     name: "Ruturaj Gaikwad",
    //     age: "35",
    //     Ipl: "1797",
    //     Matches: "52",
    //     Wickets: "0",
    //     bg: "rgb(236, 202, 24)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png"
    // }, {

    //     name: "Deepak Chahar",
    //     age: "29",
    //     Ipl: "80",
    //     Matches: "73",
    //     Wickets: "72",
    //     bg: "rgb(236, 202, 24)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/91.png"
    // }, {

    //     name: "Devon Conway",
    //     age: "38",
    //     Ipl: "924",
    //     Matches: "23",
    //     Wickets: "0",
    //     bg: "rgb(236, 202, 24)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png"
    // }], [{

    //     name: "KL Rahul",
    //     age: "35",
    //     Ipl: "4163",
    //     Matches: "118",
    //     Wickets: "0",
    //     bg: "rgb(167, 67, 121)",
    //     backgroundImage: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png"
    // }, {

    //     name: "Quinton de Kock",
    //     age: "39",
    //     Ipl: "2907",
    //     Matches: "96",
    //     Wickets: "0",
    //     bg: "rgb(167, 67, 121)",
    //     backgroundImage: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/170.png"
    // }, {

    //     name: "Krunal Pandya",
    //     age: "35",
    //     Ipl: "1514",
    //     Matches: "113",
    //     Wickets: "70",
    //     bg: "rgb(167, 67, 121)",
    //     backgroundImage: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/17.png"
    // }, {

    //     name: "Nicholas Pooran",
    //     age: "29",
    //     Ipl: "1270",
    //     Matches: "62",
    //     Wickets: "0",
    //     bg: "rgb(167, 67, 121)",
    //     backgroundImage: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/136.png"
    // }, {

    //     name: "Amit Mishra",
    //     age: "38",
    //     Ipl: "381",
    //     Matches: "173",
    //     Wickets: "0",
    //     bg: "rgb(167, 67, 121)",
    //     backgroundImage: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/107.png"
    // }], [{

    //     name: "Jonny Bairstow ",
    //     age: "35",
    //     Ipl: "1291",
    //     Matches: "39",
    //     Wickets: "0",
    //     bg: "rgb(225, 56, 58)",
    //     backgroundImage: "(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/216.png"
    // }, {

    //     name: "Shikhar Dhawan",
    //     age: "39",
    //     Ipl: "6617",
    //     Matches: "217",
    //     Wickets: "4",
    //     bg: "rgb(225, 56, 58)",
    //     backgroundImage: "(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png"
    // }, {

    //     name: "Jitesh Sharma",
    //     age: "35",
    //     Ipl: "543",
    //     Matches: "26",
    //     Wickets: "0",
    //     bg: "rgb(225, 56, 58)",
    //     backgroundImage: "(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1000.png"
    // }, {

    //     name: "Atharva Taide",
    //     age: "29",
    //     Ipl: "186",
    //     Matches: "",
    //     Wickets: "0",
    //     bg: "rgb(225, 56, 58)",
    //     backgroundImage: "(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1001.png"
    // }, {

    //     name: "Sam Curran",
    //     age: "38",
    //     Ipl: "613",
    //     Matches: "46",
    //     Wickets: "42",
    //     bg: "rgb(225, 56, 58)",
    //     backgroundImage: "(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/138.png"
    // }], [{

    //     name: "Shubman Gill",
    //     age: "35",
    //     Ipl: "2970",
    //     Matches: "129",
    //     Wickets: "0",
    //     bg: "rgb(119, 199, 242)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png"
    // }, {

    //     name: "Wriddhiman Saha",
    //     age: "39",
    //     Ipl: "2798",
    //     Matches: "115",
    //     Wickets: "0",
    //     bg: "rgb(119, 199, 242)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/225.png"
    // }, {

    //     name: "Kane Williamson",
    //     age: "35",
    //     Ipl: "2101",
    //     Matches: "89",
    //     Wickets: "0",
    //     bg: "rgb(119, 199, 242)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/65.png"
    // }, {

    //     name: "Vijay Shankar",
    //     age: "29",
    //     Ipl: "63",
    //     Matches: "1032",
    //     Wickets: "9",
    //     bg: "rgb(119, 199, 242)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/61.png"
    // }, {

    //     name: "Mohit Sharma",
    //     age: "38",
    //     Ipl: "122",
    //     Matches: "21",
    //     Wickets: "119",
    //     bg: "rgb(119, 199, 242)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/100.png"
    // }], [{

    //     name: "David Warner",
    //     age: "35",
    //     Ipl: "6397",
    //     Matches: "126",
    //     Wickets: "152",
    //     bg: "rgb(201, 0, 6)",
    //     backgroundImage: "linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png"
    // }, {

    //     name: "Prithvi Shaw",
    //     age: "39",
    //     Ipl: "1694",
    //     Matches: "99",
    //     Wickets: "0",
    //     bg: "rgb(201, 0, 6)",
    //     backgroundImage: "linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/51.png"
    // }, {

    //     name: "Axar Patel",
    //     age: "35",
    //     Ipl: "1418",
    //     Matches: "54",
    //     Wickets: "0",
    //     bg: "rgb(201, 0, 6)",
    //     backgroundImage: "linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/110.png"
    // }, {

    //     name: "Lalit Yadav",
    //     age: "29",
    //     Ipl: "295",
    //     Matches: "48",
    //     Wickets: "10",
    //     bg: "rgb(201, 0, 6)",
    //     backgroundImage: "linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/538.png"
    // }, {

    //     name: "Lungi Ngidi",
    //     age: "38",
    //     Ipl: "0",
    //     Matches: "14",
    //     Wickets: "25",
    //     bg: "rgb(201, 0, 6)",
    //     backgroundImage: "linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/99.png"
    // }], [{

    //     name: "Sanju Samson",
    //     age: "35",
    //     Ipl: "3888",
    //     Matches: "119",
    //     Wickets: "0",
    //     bg: "rgb(235, 131, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png"
    // }, {

    //     name: "Jos Buttler",
    //     age: "39",
    //     Ipl: "323",
    //     Matches: "214",
    //     Wickets: "0",
    //     bg: "rgb(235, 131, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png"
    // }, {

    //     name: "Yashasvi Jaiswal",
    //     age: "35",
    //     Ipl: "1172",
    //     Matches: "32",
    //     Wickets: "0",
    //     bg: "rgb(235, 131, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/533.png"
    // }, {

    //     name: "Riyan Parag",
    //     age: "29",
    //     Ipl: "600",
    //     Matches: "54",
    //     Wickets: "4",
    //     bg: "rgb(235, 131, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/189.png"
    // }, {

    //     name: "Ravichandran Ashwin",
    //     age: "38",
    //     Ipl: "714",
    //     Matches: "197",
    //     Wickets: "171",
    //     bg: "rgb(235, 131, 181)",
    //     backgroundImage: "linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/45.png"
    // }], [{

    //     name: "Rinku Singh",
    //     age: "35",
    //     Ipl: "725",
    //     Matches: "31",
    //     Wickets: "0",
    //     bg: "rgb(66, 37, 111)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/152.png"
    // }, {

    //     name: "Nitish Rana",
    //     age: "39",
    //     Ipl: "2594",
    //     Matches: "105",
    //     Wickets: "10",
    //     bg: "rgb(66, 37, 111)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png"
    // }, {

    //     name: "Shreyas Iyer",
    //     age: "35",
    //     Ipl: "2776",
    //     Matches: "101",
    //     Wickets: "7",
    //     bg: "rgb(66, 37, 111)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/12.png"
    // }, {

    //     name: "Andre Russell",
    //     age: "29",
    //     Ipl: "2262",
    //     Matches: "112",
    //     Wickets: "96",
    //     bg: "rgb(66, 37, 111)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png"
    // }, {

    //     name: "Venkatesh Iyer",
    //     age: "38",
    //     Ipl: "956",
    //     Matches: "36",
    //     Wickets: "3",
    //     bg: "rgb(66, 37, 111)",
    //     backgroundImage: "linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    //     image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/584.png"
    // }]]


    useEffect(() => {

        const params = new URLSearchParams(location.search);
        console.log(params)
        
        const playerName = params.get("player");

        console.log(playerName,Player.flat());

        const filterPlayers =Player.flat().filter((player)=>{
            return(  
                
            player.name.toLowerCase().trim().toString() === playerName.toLowerCase().trim() ||
            player.name.toLowerCase().trim().includes(playerName.trim().toLowerCase())
         ) })
     
        setPlayerDetails(filterPlayers[0])

    }, []);

    return (
        <>
            <>
                <h1 id="h15">Player Details</h1>

                {

                    playerDetails ?

                        <div id="main6">
                            <div id="child1" style={{ backgroundColor:playerDetails.bg, backgroundImage:playerDetails.backgroundImage}}>
                                <img src={playerDetails.image} width={360} height={350} />
                            </div>

                            <div id="child2">
                                <h2>{playerDetails.name}</h2><br/>
                              
                                <p><b>IPL Runs: &nbsp; </b> {playerDetails.Ipl}</p>
                                <p><b>Matches: &nbsp; </b> {playerDetails.Matches}</p>
                                <p><b>Wickets:  &nbsp;</b> {playerDetails.Wickets}</p>
                            </div>

                        </div>

                        :
                        <p>No player details found.</p>
                }
            </>

        </>
    )
}
export default Searchplayer