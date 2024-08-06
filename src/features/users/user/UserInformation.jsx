import styled, { css } from "styled-components";
import ButtonText from "../../../ui/ButtonText";
import { useMoveBack } from "../../../hooks/useMoveBack";
//import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import UsersRecentRideTable from "./UserRecentRideTable";
import UserComplainsTable from "./UserComplainsTable";
import InformationItemTable from "./InformationItemTable";
import EditUser from "./EditUser";
import useUserInfo from "../useUserInfo";
import Spinner from "../../../ui/Spinner";
import Empty from "../../../ui/Empty";
import useUserActivity from "../useUserActivity";

function UserInformation() {
  const { userInfo, isLoading1 } = useUserInfo();
  const { userActivity, isLoading } = useUserActivity();

  const moveBack = useMoveBack();

  console.log(userActivity);

  if (isLoading1 || isLoading) return <Spinner />;

  if (!userInfo) return <Empty resource="users" />;

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

  //const navigete = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Row type="vertical">
          <ButtonText onClick={moveBack}>&larr; Users</ButtonText>
          <h1>User Information</h1>
        </Row>
        <Row type="horizontal">
          <EditUser />
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
              "&:hover": {
                background: "#EFF6FF",
                boxShadow: "0 4px 60px 0 #0038FF26",
              },
            }}
          >
            Block
          </Button>
        </Row>
      </Row>

      <Row>
        <InformationItemTable data={userInfo} title="User's Info" />
        <InformationItemTable data={userActivity} title="Activities Info" />
      </Row>

      <UsersRecentRideTable />

      <UserComplainsTable />
    </>
  );
}

export default UserInformation;
