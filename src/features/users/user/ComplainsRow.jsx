import { useNavigate } from "react-router-dom";
import Table from "../../../ui/Table";
import styled, { css } from "styled-components";

function ComplainsRow({ userInfo }) {
  const navigete = useNavigate();

  const {
    driverName,
    destinationA,
    destinationB,
    date,
    price,
    status,

    id,
  } = userInfo;

  function handleClick() {
    //navigete(`/user-information/${id}`);
    // Add your click handling logic here
  }

  const Div = styled.div`
    ${(props) =>
      props.as === "ongoing" &&
      css`
        color: #fe9e46;
      `}
    ${(props) =>
      props.as === "completed" &&
      css`
        color: #20c992;
      `}
      ${(props) =>
      props.as === "cancelled" &&
      css`
        color: #fc5555;
      `}
  `;

  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr 1fr">
      <Table.Row>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {driverName}
        </div>
        <div>{destinationA}</div>
        <div>{destinationB}</div>
        <div>{date}</div>
        <div>{price}</div>
        {status === "On Going" ? (
          <Div as="ongoing">{status}</Div>
        ) : status === "completed" ? (
          <Div as="completed">{status}</Div>
        ) : null}
      </Table.Row>
    </Table>
  );
}

export default ComplainsRow;
