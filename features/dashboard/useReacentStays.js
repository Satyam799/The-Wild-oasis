import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom"
import { getBookingsAfterDate, getStaysAfterDate } from "../../services/apiBookings";

export function useReacentStays() {
    const [SearchParams]=useSearchParams()

    const value=!SearchParams.get("last")?7:Number(SearchParams.get("last"))
    const quertDate=subDays(new Date(),value).toISOString();
    const {data:staysdata,isLoading:isstayloading}=useQuery({
        queryFn:()=>getStaysAfterDate(quertDate),
        queryKey:["Stays",`last=${value}`]
    })

const confirmstay=staysdata?.filter((data)=>data.status==="checked-in"||data.status==="checked-out")
return {staysdata,isstayloading,confirmstay}
}

export default useReacentStays
