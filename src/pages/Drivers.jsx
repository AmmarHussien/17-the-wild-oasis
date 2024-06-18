import AddDriver from "../features/drivers/AddDriver";
import DriversTable from "../features/drivers/DriversTable";
import DriversTableOperations from "../features/drivers/DriversTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Drivers() {
  return (
    <>
      <Row type="horizontal">
        <Row type="vertical">
          <Heading as="h1">Drivers</Heading>
          <DriversTableOperations />
        </Row>
        <AddDriver />
      </Row>

      <DriversTable />
    </>
  );
}

export default Drivers;
