import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/Uormrow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {

const {register,formState,handleSubmit,getValues,reset}=useForm()

const {errors}=formState

const {signp,isLoading}=useSignup()
function submitting({fullName,email,password}){
  if(!isLoading)
  signp({fullName,email,password},{onSettled:()=>reset()})
}

function error(err){
  console.log(err)
}
  return (
    <Form onSubmit={handleSubmit(submitting,error)} >
      <FormRow lable="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register("fullName",{required:"This is the requred field"})}/>
      </FormRow>

      <FormRow lable="Email address" error={errors?.email?.message}>
        <Input type="email" id="email" {...register("email",{required:"This is the requred field",pattern:{value:/\S+@\S+\.\S+/,message:'provide an valid email address'}})}/>
      </FormRow>

      <FormRow lable="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password" {...register("password",{required:"This is the requred field",minLength:{value:8,message:"password required minimum 8 characters"}})}/>
      </FormRow>

      <FormRow lable="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input type="password" id="passwordConfirm" {...register("passwordConfirm",{required:"This is the requred field",validate:(value)=>value===getValues().password || "Both the password should be matched "})}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
