import { useNavigate } from "react-router-dom";
import Table from "../../../ui/Table";

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
        <div>{status}</div>
      </Table.Row>
    </Table>
  );
}

export default ComplainsRow;
