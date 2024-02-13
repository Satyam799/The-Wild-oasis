import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentuser } from "../../services/apiAuth";
import toast from "react-hot-toast";


export function useUpdateduser(){
const queryclient=useQueryClient()


    const {mutate:updatdatafunction,isLoading:Loadinguptheuserdata}=useMutation({
        mutationFn:updateCurrentuser,
        onSuccess:()=>{
            toast.success("The useer is updated successfully")
            queryclient.invalidateQueries({active:true})
        },
        onError:()=>toast.error("There is an error updaloading up the data ")
    })
    return {updatdatafunction,Loadinguptheuserdata}
}