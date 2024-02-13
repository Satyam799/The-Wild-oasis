import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout(){
const navigate=useNavigate()
const queryq=useQueryClient()
    const {mutate:Logoutfn,isLoading}=useMutation({
        mutationFn:logout,
        onSuccess:()=>{
            queryq.removeQueries()

            navigate('/login',{replace:true})
            toast.success("The user loged out the application")
        },
        onError:()=>toast.error("Unable to logout")
    }) 



    return {Logoutfn,isLoading}
}