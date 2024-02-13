import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createeditcabin } from "../../services/apicabins";

export function useEditcabins(){
const queryclient=useQueryClient();

const {mutate:editcabin,isLoading:isediting}=useMutation({
    mutationFn:({value,id})=>createeditcabin(value,id),
    onSuccess:()=>{
      toast.success(" Cabin successfully edited")
      queryclient.invalidateQueries({
        queryKey:["cabins"]
      })

    },
    onError:(err)=>toast.error(err.message)

  })
  return {editcabin,isediting}
}