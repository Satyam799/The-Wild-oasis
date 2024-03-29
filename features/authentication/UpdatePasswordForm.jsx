import { useForm } from "react-hook-form";
import FormRow from "../../ui/Uormrow";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

import {  useUpdateduser } from "./useUpdateuser"

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const {updatdatafunction,Loadinguptheuserdata}=useUpdateduser()

  function onSubmit({ password }) {
    updatdatafunction({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        lable="New Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={Loadinguptheuserdata}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        lable="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={Loadinguptheuserdata}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={Loadinguptheuserdata}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
