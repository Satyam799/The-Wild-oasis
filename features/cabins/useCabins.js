import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apicabins";

export function useCabin(){
const {data:cabins,isLoading}=useQuery({
    queryKey:["cabins"],
    queryFn:getCabins
  })
  return {cabins,isLoading}
}