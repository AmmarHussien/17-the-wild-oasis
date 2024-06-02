import styled from "styled-components";
import Heading from "../../ui/Heading";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import StatistecsItem from "./StatistecsItem";

const StyledTextContainer = styled.div`
  top: 16px;
  left: 16px;
  gap: 8px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
`;

const StyledContentContainer = styled.div`
  top: 101px;
  left: 16px;
  gap: 16px;
  opacity: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const VerticalDivider = styled.div`
  height: 83px; // Adjust height as needed
  width: 1px;
  background-color: gray;
  margin: 0 10px; // Adjust margin as needed
`;
function DriverStatistecs() {
  return (
    <>
      <StyledTextContainer>
        <Heading as="textLarge">Driver statistics</Heading>
        <Heading as="textSmall">
          Indication for the total rides over this month
        </Heading>
      </StyledTextContainer>
      <StyledContentContainer>
        <StatistecsItem
          icon={
            <VerifiedOutlinedIcon
              sx={{
                color: "#20C992",
              }}
            />
          }
          title={"Aproved"}
          color="#20C992"
          statistecs={150}
        />
        <VerticalDivider />
        <StatistecsItem
          icon={
            <DirectionsCarOutlinedIcon
              sx={{
                color: "#EAB308",
              }}
            />
          }
          title={"Pending"}
          color="#EAB308"
          statistecs={150}
        />
        <VerticalDivider />
        <StatistecsItem
          icon={
            <CancelPresentationOutlinedIcon
              sx={{
                color: "#FC5555",
              }}
            />
          }
          title={"Blocked"}
          color="#FC5555"
          statistecs={150}
        />
      </StyledContentContainer>
    </>
  );
}

export default DriverStatistecs;
