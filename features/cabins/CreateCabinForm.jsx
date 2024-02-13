import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

import Formrow from "../../ui/formrow";
import { useCreatecabin } from "./useCreatecabin";
import { useEditcabins } from "./useEditcabin";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({cabintoedit={},setIsOpenModel}) {
const {id:editvalue,...editvalues}=cabintoedit
const iseditsession=Boolean(editvalue)
const {register,handleSubmit,reset,getValues,formState}=useForm({defaultValues:iseditsession?editvalues:''})
const {errors}=formState

 
 
  const {createcabin,iscreating}=useCreatecabin()
  const {editcabin,isediting}=useEditcabins()

  
  const isworking=iscreating||isediting

  function submitting(data){
const image=typeof data.image==='string'?data.image:data.image[0]
   if(iseditsession)editcabin({value:{...data,image:image},id:editvalue},{
    onSuccess:()=>{
      setIsOpenModel?.(false)

    }
   })
   else createcabin({...data,image:image},{
  onSuccess:()=>{
    reset()
    setIsOpenModel?.(false)
  }
  })
  
  }
  function onError(errors){
    console.log(errors)
  }


  return (
    <Form onSubmit={handleSubmit(submitting,onError)} type={setIsOpenModel? 'modal':'regular'}>
      
      <Formrow lable={'Cabin name'} error={errors?.name?.message}>
        <Input type="text" id="name" {...register("name",{required:"This is required field"})} disabled={isworking}/></Formrow>
      
      <Formrow lable={'Maximum capacity'} error={errors?.maxCapacity?.message}><Input disabled={isworking} type="number" id="maxCapacity" {...register("maxCapacity",{required:"This is required field",
        min:{
            value:1,
            message:"capacity should be atleast 1"
        }})}/></Formrow>
      <Formrow lable={'Regular price'} error={errors?.regularPrice?.message}><Input disabled={isworking} type="number" id="regularPrice" {...register("regularPrice",{required:"This is required field",min:{
          value:1,
          message:"capacity should be atleast 1"
        }})} />
        </Formrow>
        <Formrow lable={'Discount'} error={errors?.discount?.message}> 
        <Input disabled={isworking} type="number" id="discount" defaultValue={0} {...register("discount",{required:"This is required field",validate:(value)=>value<getValues().regularPrice||`The discunt shouldnot be less then ${value} ${getValues().regularPrice}`
        })}/>
        </Formrow>

      
      <Formrow lable={"Description for website"} error={errors?.description?.message}>
        
        <Textarea type="number" id="description" defaultValue="" {...register("description",{required:"This is required field"})}/>
      </Formrow>

      <Formrow lable={'Cabin photo'} error={errors?.description?.image}>
        
        <FileInput id="image" accept="image/*" {...register("image",iseditsession? false :{required:'This is required field'})}/>
      </Formrow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={()=>setIsOpenModel?.(c=>!c)}>
          Cancel
        </Button>
        <Button disabled={isworking}>{iseditsession? 'Edit cabin':'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
