import styled from "styled-components";

import Table from "../../ui/Table";

function CabinRow({ ride }) {
  return (
    <Table columns="1fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr">
      <Table.Row>
        <p>{ride.id}</p>
        <p>{ride.driver}</p>
        <p>{ride.pickup_address}</p>
        <p>{ride.destination_address}</p>
        <p>{ride.id}</p>
        <p>{ride.price}</p>
        <p>{ride.status}</p>
      </Table.Row>
    </Table>
  );
}

export default CabinRow;
