import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";
import { getToday } from "../../utils/helpers";

export function useTodayActivity(){

const {data:list,isLoading}=useQuery({
    queryKey:["today-activity"],
    queryFn:getStaysTodayActivity
})
const activity=list?.filter((el)=>el.status!=="checked-out")
return {activity,isLoading}
}