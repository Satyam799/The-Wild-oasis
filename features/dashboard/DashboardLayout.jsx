import styled from "styled-components";
import useReacentbookings from "./useReacentbookings";
import Spinner from "../../ui/Spinner";
import useReacentStays from "./useReacentStays";
import Stats from "./Stats";
import { useCabin } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import Today from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const {bookingsdate,isLoading,value}=useReacentbookings()
  const {isstayloading,confirmstay}=useReacentStays()
  const {cabins,isLoading:caninloading}=useCabin()

  if(isLoading ||caninloading || isstayloading) return <Spinner/>
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookingsdate} confirmedstays={confirmstay}  numDays={value} cabinCount={cabins.length}/>
    <Today/>
    <DurationChart confirmedstays={confirmstay}/>
    <SalesChart bookings={bookingsdate} numDays={value}/>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
