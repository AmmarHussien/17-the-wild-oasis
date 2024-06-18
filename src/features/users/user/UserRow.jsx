import { useNavigate } from "react-router-dom";
import Table from "../../../ui/Table";

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
        <div>{status}</div>
        <div>{rate}</div>
      </Table.Row>
    </Table>
  );
}

export default UserRow;
