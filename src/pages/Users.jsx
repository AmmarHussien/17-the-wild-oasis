import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UsersTable from "../features/users/UsersTable";
import AddUser from "../features/users/AddUser";
import UsersTableOperations from "../features/users/UsersTableOperations";

function Users() {
  return (
    <>
      <Row type="horizontal">
        <Row type="vertical">
          <Heading as="h1">Users</Heading>
          <UsersTableOperations />
        </Row>
        <AddUser />
      </Row>
      <UsersTable />
    </>
  );
}

export default Users;
