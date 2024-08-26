import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import DriversRow from "./DriversRow";
import useDrivers from "./useDrivers";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

function DriversTable() {
  const [searchParams] = useSearchParams();

  const { isLoading, drivers, count } = useDrivers();

  // Show the loading spinner while the data is being fetched
  if (isLoading) return <Spinner />;

  // Show an empty state if there are no drivers to display
  if (!drivers.length) return <Empty resourceName="drivers" />;

  // Check the status in the query parameters
  const isBlocked = searchParams.get("status") === "Blocked";

  // Set columns based on the status
  const columns = isBlocked
    ? "0.8fr 0.8fr 1.4fr 1fr 1fr 1fr"
    : "1fr 1fr 1fr 1fr 1fr";

  return (
    <Table columns={columns}>
      <Table.TableNav title="Driver Table" tableData={drivers} />

      <Table.Header>
        <div>Driver Name</div>
        {isBlocked && <div>Reason</div>}
        <div>Personal License Expiry</div>
        <div>Vehicle License Expiry</div>
        <div>Email</div>
        <div>Phone Number</div>
      </Table.Header>

      <Table.Body
        data={drivers}
        render={(driver) => <DriversRow driverInfo={driver} key={driver.id} />}
      />

      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default DriversTable;
