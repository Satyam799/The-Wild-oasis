import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns"
import { useSearchParams } from "react-router-dom"
import { getBookingsAfterDate } from "../../services/apiBookings";

function useReacentbookings() {
    const [SearchParams]=useSearchParams()
    const value=!SearchParams.get("last")?7:Number(SearchParams.get("last"))
   const quertDate=subDays(new Date(),value).toISOString();

   const {data:bookingsdate,isLoading}=useQuery({
    queryFn:()=>getBookingsAfterDate(quertDate),
    queryKey:["bookings",`last=${value}`]
    })

return {bookingsdate,isLoading,value}
}

export default useReacentbookings
