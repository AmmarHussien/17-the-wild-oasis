import { useNavigate, useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";

function UsersRow({ userInfo }) {
  const navigete = useNavigate();
  const [searchParams] = useSearchParams();

  function handleClick() {
    const status = searchParams.get("status");

    if (status === "All" || status === null) {
    } else if (status === "Pending") {
      navigete(`/user-pending-information/${userInfo.id}`);
    } else {
      navigete(`/user-information/${userInfo.id}`);
    }

    // Add your click handling logic here
  }

  const isBlocked = searchParams.get("status") === "Blocked";

  const columns = isBlocked
    ? "0.4fr 1fr 1fr 1fr 1fr 1fr 1fr"
    : "0.4fr 1fr 1fr 1fr 1fr 1fr";

  return (
    <Table columns={columns}>
      <Table.Row>
        {searchParams.get("status") === "All" ||
        searchParams.get("status") === null ? (
          <>
            <div>{userInfo.id}</div>
            <div>{userInfo.full_name}</div>
          </>
        ) : (
          <>
            <div onClick={handleClick} style={{ cursor: "pointer" }}>
              {userInfo.id}
            </div>
            <div onClick={handleClick} style={{ cursor: "pointer" }}>
              {userInfo.full_name}
            </div>
          </>
        )}

        <div>{userInfo.phone}</div>
        <div>{userInfo.email}</div>
        {searchParams.get("status") === "Blocked" && (
          <div>
            {userInfo.blocked_reason === "" ? "N/A" : userInfo.blocked_reason}
          </div>
        )}
        <div>{userInfo.num_rides}</div>
        <div>{userInfo.rate}</div>
      </Table.Row>
    </Table>
  );
}

export default UsersRow;
