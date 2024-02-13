import { updateSetting } from '../../services/apiSettings';
import Form from '../../ui/Form';
import Formrow from '../../ui/Formrow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner'
import { useEdit } from './EditSetting';
import { useSettings } from './useSettings';



function UpdateSettingsForm() {
 const {setting:{
  breakfastPrice,
  maxBookingLength,
  maxGuestsPerBookings,
  minBookingLength
 }={},isLoading,error}=useSettings()

 const {Updatset,isEditing}=useEdit()

function handelsubmit(e,field){
  const {value}=e.target
  if(!value)return
  Updatset({[field]:value})
}

  if(isLoading) return <Spinner/>
  return (
    <Form>
      <Formrow lable={'Minimum nights/booking'}>
  
        <Input type='number' id='min-nights' disabled={isEditing} defaultValue={minBookingLength} onBlur={e=>handelsubmit(e,"minBookingLength")}/>
      </Formrow>
      <Formrow lable='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} disabled={isEditing}  onBlur={e=>handelsubmit(e,"maxBookingLength")}/>
      </Formrow>
      <Formrow lable='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBookings} disabled={isEditing} onBlur={e=>handelsubmit(e,"maxGuestsPerBookings")} />
      </Formrow>
      <Formrow lable='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} disabled={isEditing} onBlur={e=>handelsubmit(e,"breakfastPrice")}/>
      </Formrow>
    </Form>
  );
}

export default UpdateSettingsForm;
