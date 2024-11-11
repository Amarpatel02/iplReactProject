import { BrowserRouter} from "react-router-dom"
import { createContext, useState } from "react"
import PreLogin from "../prelogin.js/prelogin"
import PostLogin from "../postlogin.js/postlogin"





export const LoginInfo = createContext();


const Navigation =()=>{

    const [login,setLogin]=useState(false)

    const SingInn=()=>{

        setLogin(true)

}
    const singOut=()=>{

        setLogin(false)
}


    return(
        <>
        <LoginInfo.Provider value={{login,SingInn,singOut}}>
        <BrowserRouter>
   {
         login ? 
        
         <PreLogin/>
          :
          <>
          <PostLogin/> 
           <PreLogin/>
  
          </>
   }
        </BrowserRouter>
        </LoginInfo.Provider>

        </>
    )
}

export default Navigation