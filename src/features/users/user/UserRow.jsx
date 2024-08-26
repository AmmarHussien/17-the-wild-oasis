import { useNavigate } from "react-router-dom";
import Table from "../../../ui/Table";
import styled, { css } from "styled-components";

const Status = styled.div`
  ${(props) =>
    props.as === "Ongoing" &&
    css`
      color: #fe9e46;
    `}
  ${(props) =>
    props.as === "Completed" &&
    css`
      color: #20c992;
    `}
  ${(props) =>
    props.as === "Cancelled" &&
    css`
      color: #fc5555;
    `}
${(props) =>
    props.as === "Pending" &&
    css`
      color: #fedf46;
    `}
${(props) =>
    props.as === "Confirmed" &&
    css`
      color: #1e48a3;
    `}
`;

function UserRow({ userInfo }) {
  const navigate = useNavigate();

  const {
    driver: { id: driverId, full_name },
    pickup_address,
    destination_address,
    created_at,
    price,
    status,
    rate,
    currency,
  } = userInfo;

  function handleClick() {
    navigate(`/driver-information/${driverId}`);
    // Add your click handling logic here
  }

  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
      <Table.Row>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {full_name}
        </div>
        <div>{pickup_address}</div>
        <div>{destination_address}</div>
        <div>{created_at}</div>
        <div>
          {price} {currency}
        </div>
        {status === "Pending" ? (
          <Status as="Pending">{status}</Status>
        ) : status === "Confirmed" ? (
          <Status as="Confirmed">{status}</Status>
        ) : status === "Cancelled" ? (
          <Status as="Cancelled">{status}</Status>
        ) : status === "Completed" ? (
          <Status as="Completed">{status}</Status>
        ) : status === "Ongoing" ? (
          <Status as="Ongoing">{status}</Status>
        ) : null}
        <div>{rate}</div>
      </Table.Row>
    </Table>
  );
}

export default UserRow;
