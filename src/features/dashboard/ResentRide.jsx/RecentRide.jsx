import Menus from "../../../ui/Menus";
import Table from "../../../ui/Table";
import Pagination from "../../../ui/Pagination";

function RecentRide() {
  return (
    <Menus>
      <Table columns="1fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr 1fr">
        <Table.TableNav title="Recent Ride" />
        <Table.Header>
          <div>Ride Id</div>
          <div>Rider Name</div>
          <div>Destination A</div>
          <div>Destination B</div>
          <div>Date</div>
          <div>Price</div>
          <div>Price</div>
          <div>Status</div>
        </Table.Header>

        <Table.Body
        // data={sortedCabins}
        // render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />

        <Table.Footer>
          <Pagination />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default RecentRide;
