import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import DriversRow from "./DriversRow";

const fakeData = [
  {
    id: 1,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },
  {
    id: 2,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },
  {
    id: 3,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },
  {
    id: 4,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },
  {
    id: 5,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },
  {
    id: 6,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },
  {
    id: 7,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },
  {
    id: 8,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },
  {
    id: 9,
    driverName: "Miimz",
    personalLicenseExpiry: "2017-10-10",
    vehicleLicenseExpiry: "2017-10-15",
    email: "test@test",
    phoneNumber: "123",
  },

  // Add more fake data as needed
];

function DriversTable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr">
      <Table.TableNav title="Recent Rides" />
      <Table.Header>
        <div>Driver Name</div>
        <div>personal License Expiry</div>
        <div>Vehicle License Expiry</div>
        <div>Email</div>
        <div>Phone Number</div>
      </Table.Header>

      <Table.Body
        data={fakeData}
        render={(item) => <DriversRow userInfo={item} key={item.id} />}
      />

      <Table.Footer>
        <Pagination count={fakeData.length} />
      </Table.Footer>
    </Table>
  );
}

export default DriversTable;
