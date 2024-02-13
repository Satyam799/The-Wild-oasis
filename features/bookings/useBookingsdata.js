import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";


export function useBookingsdata(){

    const {bookingId}=useParams('bookingId')
    const {data:bookingdata,isLoading}=useQuery({
        queryKey:['bookings',bookingId],
        queryFn:()=>getBooking(bookingId),retry:false
    })

    return {bookingdata,isLoading}
}