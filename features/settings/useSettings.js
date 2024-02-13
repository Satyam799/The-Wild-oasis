import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings(){
const {data:setting,isLoading,error}=useQuery({
    queryKey:["settings"],
    queryFn:getSettings
  })
  return {setting,isLoading,error}
}