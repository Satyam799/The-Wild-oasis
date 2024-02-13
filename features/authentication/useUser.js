import { useQuery } from "@tanstack/react-query";
import { getUserfromloacl } from "../../services/apiAuth";

export function useUser(){

    const {data:user,isLoading}=useQuery({
        queryFn:getUserfromloacl,
        queryKey:['user']
    })
    return {user,isLoading,isAuthentication:user?.role==='authenticated'}
}