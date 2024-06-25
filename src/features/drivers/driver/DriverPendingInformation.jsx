import styled, { css } from "styled-components";
import { useMoveBack } from "../../../hooks/useMoveBack";
import ButtonText from "../../../ui/ButtonText";
import InformationItemTable from "../../users/user/InformationItemTable";

import AcceptDriver from "./Accept";
import RejectDriver from "./Reject";

const VehicleInfo = {
  CarLicenseExpiry: 1500,
  TowTruckRegisterion: 5,
  CodeForCostPerKm: 150,
  VehicleSpec: `4 Seats Electric Automatic 30000 - 50000 KM Gray`,
};

const DriverData = {
  Name: "John Doe",
  email: "Toyota Camry",
  mobile: "ABC-1234",
  idNumber: "123-456-7890",
  licenseExpiryDate: "2026-05-01",
  joiningDate: "2026-05-01",
};
function DriverPendingInformation() {
  const Row = styled.div`
    display: flex;

    ${(props) =>
      props.type === "horizontal" &&
      css`
        //justify-content: space-between;
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
      </Row>

      <Row>
        <InformationItemTable data={DriverData} title="Drivers's Info" />
        <InformationItemTable data={VehicleInfo} title="Vehicle Info" />
      </Row>

      <Row type="horizontal">
        <AcceptDriver />
        <RejectDriver />
      </Row>
    </>
  );
}

export default DriverPendingInformation;
