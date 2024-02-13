import { useUser } from "./useUser"
import Spinner from "../../ui/Spinner"
import styled from "styled-components"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const FullPage=styled.div`
    height:100vh;
    background-color:var()(--color);
    display: flex;
    align-items: center;
    justify-content: center;
`

function Protucted({children}) {
    const navigate=useNavigate()
    const {isAuthentication,isLoading}=useUser()
    useEffect(function(){
        if(!isAuthentication && !isLoading)return navigate('/login')

    },[isAuthentication,isLoading,navigate])
    
    
    if(isLoading)return  <FullPage><Spinner/></FullPage>


     if(isAuthentication) return children
}

export default Protucted
