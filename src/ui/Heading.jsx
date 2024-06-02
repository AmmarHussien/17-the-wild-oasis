import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      text-align: center;
      margin-bottom: 50px;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.6rem;
      font-weight: 200;
      text-align: center;
    `}
    ${(props) =>
    props.as === "LoginPageHeader" &&
    css`
      font-size: 33px;
      font-weight: 700;
      text-align: center;
      color: #272424;
      line-height: 40px;
    `}
    ${(props) =>
    props.as === "LoginPageSlogan" &&
    css`
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: #72788b;
      line-height: 24px;
    `}

  line-height: 1.4
`;

export default Heading;
