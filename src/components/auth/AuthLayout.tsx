import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

interface IAuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
export default AuthLayout;
