import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import UsersRow from "./UsersRow";
import useUsers from "./useUsers";

function UsersTable() {
  const { users, isLoading, count } = useUsers();

  console.log(users);

  if (isLoading) return <Spinner />;

  if (!users.length) return <Empty resourceName="Users" />;

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
        data={users}
        render={(user) => <UsersRow userInfo={user} key={user.id} />}
      />

      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default UsersTable;
