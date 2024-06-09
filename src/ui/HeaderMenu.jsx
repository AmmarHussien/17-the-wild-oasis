import styled from "styled-components";
import Logout from "../features/authentication/Logout";

import { IoMdNotificationsOutline } from "react-icons/io";

import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      {/* <li>
        <ButtonIcon onClick={() => navigate("")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <DarkModeToggle />
      </li> */}

      <li>
        <ButtonIcon onClick={() => navigate("")}>
          <IoMdNotificationsOutline />
        </ButtonIcon>
      </li>

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
