import styled, { css } from "styled-components";
import { useMoveBack } from "../../../hooks/useMoveBack";
import { useNavigate } from "react-router-dom";
import ButtonText from "../../../ui/ButtonText";
import { Button } from "@mui/material";
import InformationItemTable from "../../users/user/InformationItemTable";
import UsersRecentRideTable from "../../users/user/UserRecentRideTable";
import UserComplainsTable from "../../users/user/UserComplainsTable";
import EditDriver from "./EditDriver";
import DriverComplainsTable from "./DriverComplainsTable";
import BlockDriver from "./BlockDriver";

const ActivityData = {
  CreditBalance: 1500,
  TotalRating: 5,
  TotalRides: 150,
  TotalEarning: 5500,
  TotalPoints: 100,
};

const DriverData = {
  Name: "John Doe",
  email: "Toyota Camry",
  mobile: "ABC-1234",
  idNumber: "123-456-7890",
  licenseExpiryDate: "2026-05-01",
  joiningDate: "2026-05-01",
};
function DriverInformation() {
  const Row = styled.div`
    display: flex;

    ${(props) =>
      props.type === "horizontal" &&
      css`
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      `}

    ${(props) =>
      props.type === "vertical" &&
      css`
        flex-direction: column;
        //gap: 1.6rem;
        align-items: start;
      `}
  `;
  const moveBack = useMoveBack();
  //const navigete = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Row type="vertical">
          <ButtonText onClick={moveBack}>&larr; Drivers</ButtonText>
          <h1>Driver Information</h1>
        </Row>
        <Row type="horizontal">
          <EditDriver />
          <BlockDriver />
        </Row>
      </Row>

      <Row>
        <InformationItemTable data={DriverData} title="Drivers's Info" />
        <InformationItemTable data={ActivityData} title="Activities Info" />
      </Row>

      <UsersRecentRideTable />

      <DriverComplainsTable />
    </>
  );
}

export default DriverInformation;
