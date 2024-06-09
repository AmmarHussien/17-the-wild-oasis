import { Button } from "@mui/material";
import { useMoveBack } from "../../hooks/useMoveBack";
import ButtonText from "../../ui/ButtonText";
import styled, { css } from "styled-components";
import Heading from "../../ui/Heading";
import InformationItemRow from "./InformationItemRow";
import { useNavigate } from "react-router-dom";

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

const fakeData = [
  {
    id: 1,
    userName: "John Doe",
    carModel: "Toyota Camry",
    plateNumber: "ABC-1234",
    requestData: "2024-05-01",
    phoneNumber: "123-456-7890",
    licenseExpiryDate: "2026-05-01",
  },
];

function ServiceInformation() {
  const moveBack = useMoveBack();
  const navigete = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Row type="vertical">
          <ButtonText onClick={moveBack}>&larr; Car Services</ButtonText>
          <h1>Service Information</h1>
        </Row>
        <Row type="horizontal">
          <Button
            onClick={() => {
              navigete("/edit-car-services");
            }}
            variant="contained"
            //startIcon={<AddIcon />}
            sx={{
              width: 155,
              height: 56,
              borderRadius: 5,
              fontSize: 12,
              fontWeight: 600,
              background: "#005379",
              shadow: "0 4 60 0 #0038FF26",
            }}
          >
            Edit Request
          </Button>
          <Button
            onClick={() => {
              //navigate("/add-car-services");
            }}
            variant="contained"
            //startIcon={<AddIcon />}
            sx={{
              width: 155,
              height: 56,
              borderRadius: 5,
              fontSize: 12,
              fontWeight: 600,
              color: "#005379",
              background: "#EFF6FF",
              shadow: "0 4 60 0 #0038FF26",
            }}
          >
            Cancel Request
          </Button>
        </Row>
      </Row>

      <Row type="vertical">
        <Heading as="textLarge">Basic Info</Heading>

        <InformationItemRow
          label="user Name"
          data={fakeData[0].userName}
          id="even"
        />
        <InformationItemRow
          label="Car Model"
          data={fakeData[0].carModel}
          id="odd"
        />
        <InformationItemRow
          label="Pallet number"
          data={fakeData[0].plateNumber}
          id="even"
        />
        <InformationItemRow
          label="License Expiry Date"
          data={fakeData[0].licenseExpiryDate}
          id="odd"
        />
        <InformationItemRow
          label="Phone Number"
          data={fakeData[0].phoneNumber}
          id="even"
        />
        <InformationItemRow
          label="Request Date"
          data={fakeData[0].requestData}
          id="odd"
        />
      </Row>
    </>
  );
}

export default ServiceInformation;
