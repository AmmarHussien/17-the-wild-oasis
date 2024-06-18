import { useNavigate } from "react-router-dom";
import Table from "../../ui/Table";

function UsersRow({ userInfo }) {
  const navigete = useNavigate();
  const { name, phoneNumber, email, numberOfRides, rate, id } = userInfo;

  console.log(name);

  function handleClick() {
    navigete(`/user-information/${id}`);
    // Add your click handling logic here
  }

  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr ">
      <Table.Row>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {name}
        </div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
        <div>{numberOfRides}</div>
        <div>{rate}</div>
      </Table.Row>
    </Table>
  );
}

export default UsersRow;
