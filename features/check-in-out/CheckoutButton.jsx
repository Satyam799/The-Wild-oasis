import Button from "../../ui/Button";
import { useBookingupdateout } from "../bookings/useBookingscheckout";

function CheckoutButton({ bookingId }) {

  const {checkout,isCheckingout}=useBookingupdateout()
  
  return (
    <Button variation="primary" size="small" onClick={()=>checkout(bookingId)} disabled={isCheckingout}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
