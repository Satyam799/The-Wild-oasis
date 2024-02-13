import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBookingsdata } from "./useBookingsdata";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeletebooking } from "./useDeletebooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {

 const {bookingdata,isLoading}=useBookingsdata()
 const {deletebooking,islodaingdelete}=useDeletebooking()

 const navigate=useNavigate()


  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
if(isLoading)return <Spinner/>
if(!bookingdata) return <Empty resource="There is no such bookings exists"/>

const status = bookingdata.status;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking#{bookingdata.id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
    
     <BookingDataBox booking={bookingdata} />
      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        <Modal>
      <Modal.Open opens='Delete'>
      <Button  variation="danger"> Delete</Button>
      </Modal.Open>
      <Modal.Window name='Delete'>
      <ConfirmDelete resourceName='Booking' onConfirm={()=>deletebooking(bookingdata.id,{onSettled:()=>navigate(-1)})} disabled={islodaingdelete}/>
      </Modal.Window>
    </Modal>
        
        <Button onClick={()=>navigate(`/checkin/${bookingdata.id}`)}>
        Check in
        </Button>
        
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
