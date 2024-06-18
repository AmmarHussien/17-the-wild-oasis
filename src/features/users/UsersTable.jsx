import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import UsersRow from "./UsersRow";

const fakeData = [
  {
    id: 1,
    name: "Ammar Hussien Mohamed Hussien Mahoumd",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },
  {
    id: 2,
    name: "Ammar",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },
  {
    id: 3,
    name: "Ammar",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },
  {
    id: 4,
    name: "Ammar",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },
  {
    id: 5,
    name: "Ammar",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },
  {
    id: 6,
    name: "Ammar",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },
  {
    id: 7,
    name: "Ammar",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },
  {
    id: 8,
    name: "Ammar",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },
  {
    id: 9,
    name: "Ammar",
    phoneNumber: "01146082989",
    email: "test@example.com",
    numberOfRides: "2",
    rate: "5",
  },

  // Add more fake data as needed
];

function UsersTable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr">
      <Table.TableNav title="Recent Rides" />
      <Table.Header>
        <div>Name</div>
        <div>Phone Number</div>
        <div>Email</div>
        <div>Number Of Rides</div>
        <div>Rate</div>
      </Table.Header>

      <Table.Body
        data={fakeData}
        render={(item) => <UsersRow userInfo={item} key={item.id} />}
      />

      <Table.Footer>
        <Pagination count={fakeData.length} />
      </Table.Footer>
    </Table>
  );
}

export default UsersTable;
