import { useNavigate } from "react-router-dom";
import Table from "../../ui/Table";

function DriversRow({ userInfo }) {
  const navigete = useNavigate();
  const {
    driverName,
    personalLicenseExpiry,
    vehicleLicenseExpiry,
    email,
    phoneNumber,
    id,
  } = userInfo;

  function handleClick() {
    navigete(`/driver-information/${id}`);
    // Add your click handling logic here
  }

  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr ">
      <Table.Row>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {driverName}
        </div>
        <div>{personalLicenseExpiry}</div>
        <div>{email}</div>
        <div>{vehicleLicenseExpiry}</div>
        <div>{phoneNumber}</div>
      </Table.Row>
    </Table>
  );
}

export default DriversRow;
