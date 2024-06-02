import styled from "styled-components";
import Heading from "../../ui/Heading";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 542px;
  height: 553px;
  border-radius: 14px;
  padding: 25px 0px;
  background: rgba(255, 255, 255, 0.79);
`;

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 0;
  width: 361px;
  height: 210px;
  gap: 17px;
`;

const Image = styled.img`
  width: 60px;
  height: 61px;
`;

function LoginLogo() {
  return (
    <Box>
      <StyledFormRow>
        <Image src="public/logo-dark.png" alt="" />
        <Heading as="LoginPageHeader">Welcom To Route Admin Panel</Heading>
        <Heading as="h4">
          Login now to manage you account and check your pending request
        </Heading>
      </StyledFormRow>
    </Box>
  );
}

export default LoginLogo;
