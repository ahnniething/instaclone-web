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

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const onUsernameChange = (event: any) => {
    console.log(event.target.value);
    setUsernameError("");
    setUsername(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(username);
    if (username === "") {
      setUsernameError("Not empty pls.");
    }
    if (username.length < 10) {
      setUsernameError("too short");
    }
  };
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit}>
          {usernameError}
          <Input
            onChange={onUsernameChange}
            value={username}
            type="text"
            placeholder="Username"
          />
          <Input type="password" placeholder="Password" />
          <Button
            type="submit"
            value="Log in"
            disabled={username === "" && username.length < 10}
          />
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
