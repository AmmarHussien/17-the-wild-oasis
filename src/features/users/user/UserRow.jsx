import { useNavigate } from "react-router-dom";
import Table from "../../../ui/Table";
import styled, { css } from "styled-components";

function UserRow({ userInfo }) {
  const navigete = useNavigate();

  const {
    driverName,
    destinationA,
    destinationB,
    date,
    price,
    status,
    rate,
    id,
  } = userInfo;

  function handleClick() {
    navigete(`/driver-information/${id}`);
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
    <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
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
        ) : status === "cancelled" ? (
          <Div as="cancelled">{status}</Div>
        ) : null}
        <div>{rate}</div>
      </Table.Row>
    </Table>
  );
}

export default UserRow;
