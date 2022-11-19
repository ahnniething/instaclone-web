import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Seperator from "../components/auth/Separator";
import routes from "./routes";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  interface FormData {
    username: string;
    password: string;
  }
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();
  const onSubmitValid = (data: any) => {
    // console.log("valid", data);
  };
  const onSubmitInValid = (data: any) => {
    // console.log("Invalid", data);
  };
  console.log(errors);
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInValid)}>
          {/* useForm이 어떤 Input을 사용하는지 알아야하기 때문에 항상 input에 name값을 주어야함 */}
          <Input
            {...register("username", {
              required: "Username is required.",
              minLength: {
                value: 5,
                message: "Username should be longer than 5 chars.",
              },
              pattern: {
                message:
                  "한글, 특수문자를 제외한 1~15자 이내 영문만 사용 가능합니다.",
                value: /^[a-z0-9]{1,15}$/g,
              },
              validate: (currentValue) => currentValue.includes("potato"),
            })}
            type="text"
            placeholder="Username"
          />
          <Input
            {...register("password", { required: "Password is required." })}
            type="password"
            placeholder="Password"
          />
          <Button type="submit" value="Log in" />
        </form>
        <Seperator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta={"Don't have an account?"}
        link={routes.signUp}
        linkText={"Sign up"}
      />
    </AuthLayout>
  );
}
export default Login;
