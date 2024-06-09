import styled, { css } from "styled-components";

const StyledInfoItemRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  padding: 16px 16px 16px 16px;

  ${(props) =>
    props.id === "even" &&
    css`
      background: #eef0f2;
    `}
  ${(props) =>
    props.id === "odd" &&
    css`
      background: #f7f8fa;
    `}
`;

const StyledInfoItem = styled.div`
  display: flex;

  ${(props) =>
    props.color === "label" &&
    css`
      width: 50%;
      color: #72788e;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    `}

  ${(props) =>
    props.color === "data" &&
    css`
      color: ##272424;
      font-size: 15px;
      font-weight: 600;
      line-height: 21px;
    `}
`;

function InformationItemRow({ label, data, id }) {
  return (
    <StyledInfoItemRow id={id}>
      <StyledInfoItem color="label">{label}</StyledInfoItem>
      <StyledInfoItem color="data">{data}</StyledInfoItem>
    </StyledInfoItemRow>
  );
}

export default InformationItemRow;
