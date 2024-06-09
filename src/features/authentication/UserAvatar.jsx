import styled from "styled-components";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";

const StyledUserAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 44px;
  width: 44px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
const StyledP = styled.p`
  //styleName: footnote and caption/Footnote Regular;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: var(--Color-Text-Secondary-Text, #72788e);
`;

function UserAvatar() {
  //   const navigate = useNavigate();
  //   const { user } = useUser();
  //   const { avatar, fullName } = user.user_metadata;
  //   return (
  //     <>
  //       <Avatar
  //         src={avatar || "default-user.jpg"}
  //         alt={`Avatar of ${fullName}`}
  //       />
  //       <StyledUserAvatar onClick={() => navigate("/account")}>
  //         <span>{fullName}</span>
  //         <StyledP>Admin</StyledP>
  //       </StyledUserAvatar>
  //     </>
  //   );
}

export default UserAvatar;
