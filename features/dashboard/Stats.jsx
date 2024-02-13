import { formatCurrency } from "../../utils/helpers"
import Stat from "./Stat"
import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar} from "react-icons/hi2"


function Stats({bookings,confirmedstays,numDays,cabinCount}) {
    const numbookings=bookings?.length
   
    const sales=bookings?.reduce((acc,cur)=>acc+cur.totalPrice,0)

    const totalcheckins=confirmedstays?.length;

    const  occupency=confirmedstays?.reduce((acc,cur)=>acc+cur.numNights,0)/(numDays*cabinCount)

   return (<>
    <Stat icon={<HiOutlineBriefcase/>} title="Bookings" value={numbookings} color="blue"/>
    <Stat icon={<HiOutlineBanknotes/>} title="Sales" value={formatCurrency(sales)} color="green"/>
    <Stat icon={<HiOutlineCalendarDays/>} title="Check ins" value={totalcheckins} color="indigo"/>
    <Stat icon={<HiOutlineChartBar/>} title="Occupency rate" value={`${Math.round(occupency*100)} %`} color="yellow"/>

    </>)
}

export default Stats
