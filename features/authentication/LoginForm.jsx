import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { login } from "../../services/apiAuth";
import { useLogin } from "./userLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const {authy,isLoading}=useLogin()
  function handleSubmit(e) {
    e.preventDefault()
if(!email || !password) return 

 
authy({email,password},{
  onSettled:()=>{
    setEmail('')
    setPassword("")
  }
})
}

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical lable="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical lable="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>{!isLoading ? 'Login':<SpinnerMini/>}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
