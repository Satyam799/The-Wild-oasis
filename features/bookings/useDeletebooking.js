import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeletebooking(){
const queryi=useQueryClient()
const {mutate:deletebooking,isLoading:islodaingdelete,error}=useMutation({
    
    mutationFn:deleteBooking,
    onSuccess:()=>{
        toast.success('The cabin is deleted successfully')
        queryi.invalidateQueries({active:true})
     },
     onError:()=>{
        toast.error('There is some error on deleting')
        console.log(error)
    }
})
return {deletebooking,islodaingdelete}
}