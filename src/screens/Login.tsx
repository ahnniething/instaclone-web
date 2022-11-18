import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

interface IContainerProps {
  floating: boolean;
}
const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div<IContainerProps>`
  box-shadow: ${(props) => (props.floating ? "10px 5px 5px red" : "")};
`;

function Login() {
  return (
    <Container floating={true}>
      <Title>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
      <button onClick={() => darkModeVar(true)}>Dark Mode</button>
      <button onClick={() => darkModeVar(false)}>light Mode</button>
    </Container>
  );
}
export default Login;
