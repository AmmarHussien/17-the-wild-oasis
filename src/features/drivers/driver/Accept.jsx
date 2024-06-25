import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AcceptDriver() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/drivers?status=Pending`, {
      replace: true,
    });
    // Add your click handling logic here
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          width: 139,
          height: 56,
          borderRadius: 5,
          fontSize: 16,
          background: "#005379",
          shadow: "0 4 60 0 #0038FF26",
        }}
      >
        Accept
      </Button>
    </div>
  );
}

export default AcceptDriver;
