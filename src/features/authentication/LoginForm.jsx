import { useState } from "react";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Heading from "../../ui/Heading";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "../../ui/Checkbox";
import styled from "styled-components";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const Box = styled.div`
  padding: 25px 0px;
  display: flex;

  gap: 10px;
  flex: 1;
  justify-content: space-between;
`;

const P = styled.p`
  color: red;
`;

const FooterP = styled.p`
  margin: 20px 0;
  color: #d3cbcb;
`;

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;
const Button = styled.button`
  width: 220px;
  height: 56px;
  padding: 12px, 24px, 12px, 24px;
  gap: 4px;
  border-radius: 16px;
  background: #005379;
  color: white;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(email, password);
    // login(
    //   { email, password },
    //   {
    //     onSettled: () => {
    //       setEmail("");
    //       setPassword("");
    //     },
    //   }
    // );
  }

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h3">Please Login To Your Account</Heading>
      <FormRowVertical label="">
        <TextField
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          sx={{
            backgroundColor: "rgb(247, 248, 250)",
          }}
        />
      </FormRowVertical>

      <FormRowVertical label="">
        <TextField
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClick} edge="start">
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "rgb(247, 248, 250)",
            cursor: "pointer",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#d3d3d3",
              },
              "&:hover fieldset": {
                borderColor: "#a9a9a9",
              },
            },
          }}
        />
      </FormRowVertical>

      <Box>
        <Checkbox checked={""} onChange={() => {}}>
          Remember me
        </Checkbox>
        <P>Forget password? </P>
      </Box>

      <StyledFormRow>
        <Button disabled={isLoading}>
          {!isLoading ? "log in" : <SpinnerMini />}
        </Button>
      </StyledFormRow>
      <FooterP>
        Report a problem {"    "}
        <span>
          <ReportGmailerrorredIcon sx={{ fontSize: 20 }} />
        </span>
      </FooterP>
    </Form>
  );
}

export default LoginForm;
