import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";



export function useSignup(){

const {mutate:signp,isLoading}=useMutation({
    mutationFn:signUp,
    onSuccess:()=>{
        toast.success("The user is updated successfully")
    },
    onError:()=>toast.error("The data is updated successfully")

})

return {signp,isLoading}
}