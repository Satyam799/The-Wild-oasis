import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

const Datkcontext=createContext()


function Darkmodeprovider({children}){
const [Darkmode,setDarkmode]=useLocalStorageState(window.matchMedia('(prefers-color-scheme:dark)').matches,"isDarkMode")

useEffect(function(){
    if(Darkmode){
        document.documentElement.classList.add('dark-mode')
        document.documentElement.classList.remove('light-mode')

    }else{
        document.documentElement.classList.add('light-mode')
        document.documentElement.classList.remove('dark-mode')
    }
},[Darkmode])


function togglefunction(){
    setDarkmode(!Darkmode)
}


    return <Datkcontext.Provider value={{Darkmode,setDarkmode,togglefunction}}>{children}</Datkcontext.Provider>
}

function Uppost(){
    const context=useContext(Datkcontext)
    return context
}

export {Darkmodeprovider,Uppost}

