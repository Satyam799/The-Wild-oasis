import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllbookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { Page_size } from "../../utils/Global";

export function useBookings(){
const querycl= useQueryClient() 
const [searchParams]=useSearchParams()

const filtervakue=searchParams.get('status')
const sortvalue=searchParams.get('sortBy')||'startDate-desc'

const [field,direction]=sortvalue.split("-")
const sortBy={field,direction}
const filter= !filtervakue || filtervakue==='all' ? null: {field:"status",value:filtervakue}

const PageNo=!Number(searchParams.get('page'))?1:Number(searchParams.get('page'))
const {data:bookings,isLoading:isBookingsloading}=useQuery({
        queryKey:['bookings',filter,sortBy,PageNo],
        queryFn:()=>getAllbookings({filter,sortBy,PageNo})
    })

 const pagecount=Math.ceil(bookings?.count/Page_size)
if(PageNo<pagecount)
querycl.prefetchQuery({
    queryKey:['bookings',filter,sortBy,PageNo+1],
    queryFn:()=>getAllbookings({filter,sortBy,PageNo:PageNo+1})
})
if(PageNo>1)
querycl.prefetchQuery({
    queryKey:['bookings',filter,sortBy,PageNo-1],
    queryFn:()=>getAllbookings({filter,sortBy,PageNo:PageNo-1})
})

    return {bookings,isBookingsloading}
}