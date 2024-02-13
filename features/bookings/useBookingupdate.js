import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useBookingupdate(){
    const Queryt=useQueryClient()
    const navigate=useNavigate()
    const {mutate:checkin,isLoading:isCheckingin}=useMutation({
     mutationFn:({id,breakfast})=>updateBooking(id,{
        isPaid:'True',
        status:'checked-in',
        ...breakfast
     }),
     onSuccess:(data)=>{
     toast.success(`Booking #${data.id} successfully checkedin`);
     Queryt.invalidateQueries({active:true})
     navigate('/')
     },
     onError:()=>toast.error('There is an error on updating up the data')
    })
    return {checkin,isCheckingin}
}