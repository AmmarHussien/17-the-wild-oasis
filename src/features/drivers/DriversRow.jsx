import { useNavigate, useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";

function DriversRow({ driverInfo }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  function handleClick() {
    const status = searchParams.get("status");

    // Navigate based on status
    if (status === "All" || status === null) {
    } else if (status === "Pending") {
      navigate(`/driver-pending-information/${driverInfo.id}`);
    } else {
      navigate(`/driver-information/${driverInfo.id}`);
    }

    // Update search parameters in the URL
  }

  const columns =
    searchParams.get("status") === "Blocked"
      ? "0.8fr 0.8fr 1.4fr 1fr 1fr 1fr"
      : "1fr 1fr 1fr 1fr 1fr";

  return (
    <Table columns={columns}>
      <Table.Row>
        {searchParams.get("status") === "All" ||
        searchParams.get("status") === null ? (
          <div>{driverInfo.full_name}</div>
        ) : (
          <div onClick={handleClick} style={{ cursor: "pointer" }}>
            {driverInfo.full_name}
          </div>
        )}

        {searchParams.get("status") === "Blocked" && (
          <div>
            {driverInfo.blocked_reason === ""
              ? "N/A"
              : driverInfo.blocked_reason}
          </div>
        )}
        <div>{driverInfo.full_name}</div>
        <div>{driverInfo.full_name}</div>
        <div>{driverInfo.email}</div>
        <div>{driverInfo.phone}</div>
      </Table.Row>
    </Table>
  );
}
export default DriversRow;
