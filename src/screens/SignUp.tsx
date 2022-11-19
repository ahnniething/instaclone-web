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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;
function SignUp() {
  return (
    <AuthLayout>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign up" />
        </form>
      </FormBox>
      <BottomBox
        cta={"Have an account?"}
        link={routes.home}
        linkText={"Login"}
      />
    </AuthLayout>
  );
}
export default SignUp;
