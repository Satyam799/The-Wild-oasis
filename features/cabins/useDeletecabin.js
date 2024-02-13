import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteCabins as deleteCabinsAPI } from "../../services/apicabins"
export function useDeletecabin(){
const queryclient=useQueryClient()
  const {mutate:deletecabins,isLoading:isDeleting}=useMutation({
    mutationFn:deleteCabinsAPI,
    onSuccess:()=>{
      toast.success("The cabin deleted successfuly")
      queryclient.invalidateQueries({
        queryKey:["cabins"]
      })
    },
    onError:(err)=>toast.error(err.message)
  })
  return {isDeleting,deletecabins}
}
