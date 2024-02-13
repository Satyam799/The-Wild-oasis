import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useBookingupdateout(){
    const Queryt=useQueryClient()
    const navigate=useNavigate()
    const {mutate:checkout,isLoading:isCheckingout}=useMutation({
     mutationFn:(id)=>updateBooking(id,{
        status:'checked-out'
     }),
     onSuccess:(data)=>{
     toast.success(`Booking #${data.id} successfully checked-out`);
     Queryt.invalidateQueries({active:true})
     },
     onError:()=>toast.error('There is an error on updating up the data')
    })
    return {checkout,isCheckingout}
}