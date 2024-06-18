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
    props.as === "loginPageHeader" &&
    css`
      font-size: 33px;
      font-weight: 700;
      text-align: center;
      color: #272424;
      line-height: 40px;
    `}
    ${(props) =>
    props.as === "loginPageSlogan" &&
    css`
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: #72788b;
      line-height: 24px;
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 12px;
      font-weight: 400;
      color: #72788b;
      line-height: 16px;
    `}
    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 15px;
      font-weight: 700;
      color: #272424;
      line-height: 21px;
    `}

    ${(props) =>
    props.as === "h7" &&
    css`
      font-family: Noto Sans Display;
      font-size: 20.57px;
      font-weight: 700;
      line-height: 28.8px;
      text-align: right;
    `}

    ${(props) =>
    props.as === "statisticsItemText" &&
    css`
      //styleName: Body/Body Bold;
      font-family: Noto Sans Display;
      font-size: 15px;
      font-weight: 700;
      line-height: 21px;
      text-align: center;
    `}
    ${(props) =>
    props.as === "statisticsItemNum" &&
    css`
      font-family: Noto Sans Display;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
    `}
  


  line-height: 1.4
`;

export default Heading;
