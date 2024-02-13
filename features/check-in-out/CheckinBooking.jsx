import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBookingsdata } from "../bookings/useBookingsdata";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useState } from "react";
import { useEffect } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useBookingupdate } from "../bookings/useBookingupdate";
import { useSettings } from "../settings/useSettings";
import { useBookingupdateout } from "../bookings/useBookingscheckout";
import { useDeletebooking } from "../bookings/useDeletebooking";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const [checking,setchecking]=useState(false)
  const [Breakfast,setBreakfast]=useState(false)
  const {setting,isLoading:settingloading}=useSettings()
  const {bookingdata,isLoading}=useBookingsdata();
  const {checkin,isCheckingin}=useBookingupdate()
  const {deletebooking,islodaingdelete}=useDeletebooking()
  
  
  
  
  useEffect(function(){
    const value=bookingdata?.status!=='unconfirmed'
    setchecking(value)
    const breakf=bookingdata?.hasBreakfast===true
    setBreakfast(breakf)
  },[bookingdata])

  function handleCheckin() {
   if(!checking) return
   
   const {id}=bookingdata
   if(Breakfast){
    checkin({id,breakfast:{
      hasBreakfast:true,
      extrasPrice:BFnights,
      totalPrice:bookingdata.totalPrice+BFnights
      
    }})

    console.log( {id,hasBreakfast:true,extrasPrice:BFnights,totalPrice:bookingdata.totalPrice+BFnights})
   }else{
   checkin({id,breakfast:{}})
   }




  }
  const {checkout,isCheckingout}=useBookingupdateout()

if(isLoading || settingloading) return <Spinner/>
const BFnights= setting.breakfastPrice*bookingdata.numNights*bookingdata.numGuests

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingdata.id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={bookingdata} />
    {!bookingdata.hasBreakfast && <Box>
      <Checkbox checked={Breakfast} disabled={Breakfast} onChange={()=>{
        setBreakfast(!Breakfast)
        setchecking(false)
        }} id="Breakfast">Please confirm if the user wants to add the Breakfast {formatCurrency(BFnights)}</Checkbox>
    </Box>}
    <Box>
      <Checkbox checked={checking} disabled={checking || isCheckingin} onChange={()=>setchecking(!checking)}>Please confirm that the {bookingdata.guests.fullName} 
      has paid the amount {!Breakfast? formatCurrency(bookingdata.totalPrice):`${formatCurrency(bookingdata.totalPrice+BFnights)} (${formatCurrency(bookingdata.totalPrice)} + ${formatCurrency(BFnights)})`}</Checkbox>
    </Box>
      <ButtonGroup>
       {bookingdata.status !=='checked-in' && <Button onClick={handleCheckin} disabled={checking===false || isCheckingin}>Check in booking #{bookingdata.id}</Button>}
        {bookingdata.status==='checked-in' && <Button onClick={()=> checkout(bookingdata.id)} disabled={isCheckingout}> Check out</Button>}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
       
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
