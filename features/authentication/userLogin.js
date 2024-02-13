import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate, useNavigation } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin(){
const navigate=useNavigate()
const queryCl=useQueryClient()
 
const {mutate:authy,isLoading}=useMutation({
    mutationFn:({email,password})=>login({email,password}),
    onSuccess:(user)=>{
        queryCl.setQueryData(["user"],user.user)
        navigate('/dashboard',{replace:false})
    },
    onError:()=>toast.error('Invalid credentils')
})
return {authy,isLoading}
}