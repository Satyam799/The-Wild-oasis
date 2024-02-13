import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createeditcabin } from "../../services/apicabins";
import toast from "react-hot-toast";

 
 
 export function useCreatecabin(){
  const queryclient=useQueryClient();

  const {mutate:createcabin,isLoading:iscreating}=useMutation({
    mutationFn:createeditcabin,
    onSuccess:()=>{
      toast.success("New Cabin is created successfully")
      queryclient.invalidateQueries({
        queryKey:["cabins"]
      })

    },
    onError:(err)=>toast.error(err.message)

  })
  return {createcabin,iscreating}
}