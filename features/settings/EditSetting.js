import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEdit(){
const query=useQueryClient()
const {mutate:Updatset,isLoading:isEditing}=useMutation({
    mutationFn:updateSetting,
    onSuccess:()=>{
        toast.success("settings updated successfully")
        query.invalidateQueries({queryKey:["settings"]})
    },
    onError:(err)=>toast.error(err.message)
})
return {Updatset,isEditing}
}
