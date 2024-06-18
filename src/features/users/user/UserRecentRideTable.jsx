import Pagination from "../../../ui/Pagination";
import Table from "../../../ui/Table";
import UserRow from "./UserRow";

const fakeData = [
  {
    id: 1,
    driverName: "Ahmed",
    destinationA: "maadi",
    destinationB: "helwan",
    date: "2017-12-12",
    price: "300",
    status: "completed",
    rate: "5",
  },
  {
    id: 2,
    driverName: "Ahmed",
    destinationA: "maadi",
    destinationB: "helwan",
    date: "2017-12-12",
    price: "300",
    status: "completed",
    rate: "5",
  },
  {
    id: 3,
    driverName: "Ahmed",
    destinationA: "maadi",
    destinationB: "helwan",
    date: "2017-12-12",
    price: "300",
    status: "completed",
    rate: "5",
  },
  {
    id: 4,
    driverName: "Ahmed",
    destinationA: "maadi",
    destinationB: "helwan",
    date: "2017-12-12",
    price: "300",
    status: "completed",
    rate: "5",
  },
  {
    id: 5,
    driverName: "Ahmed",
    destinationA: "maadi",
    destinationB: "helwan",
    date: "2017-12-12",
    price: "300",
    status: "completed",
    rate: "5",
  },
  {
    id: 6,
    driverName: "Ahmed",
    destinationA: "maadi",
    destinationB: "helwan",
    date: "2017-12-12",
    price: "300",
    status: "completed",
    rate: "5",
  },
  {
    id: 7,
    driverName: "Ahmed",
    destinationA: "maadi",
    destinationB: "helwan",
    date: "2017-12-12",
    price: "300",
    status: "completed",
    rate: "5",
  },
  {
    id: 8,
    driverName: "Ahmed",
    destinationA: "maadi",
    destinationB: "helwan",
    date: "2017-12-12",
    price: "300",
    status: "completed",
    rate: "5",
  },

  // Add more fake data as needed
];

function UsersRecentRideTable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
      <Table.TableNav title="Recent Rides" />
      <Table.Header>
        <div>Driver Name</div>
        <div>Destination A</div>
        <div>Destination B</div>
        <div>Date</div>
        <div>Price</div>
        <div>Status</div>
        <div>Rate</div>
      </Table.Header>

      <Table.Body
        data={fakeData}
        render={(item) => <UserRow userInfo={item} key={item.id} />}
      />

      <Table.Footer>
        <Pagination count={fakeData.length} />
      </Table.Footer>
    </Table>
  );
}

export default UsersRecentRideTable;
