import { Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import Modal from "../../../ui/Modal";
import BlockDriverForm from "./BlockDriverForm";

function BlockDriver() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="user-form">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              width: 139,
              height: 56,
              borderRadius: 5,
              fontSize: 16,
              background: "#EFF6FF",
              color: "#005379",
              shadow: "0 4 60 0 #0038FF26",
              "&:hover": {
                background: "#EFF6FF",
                boxShadow: "0 4px 60px 0 #0038FF26",
              },
            }}
          >
            Block
          </Button>
        </Modal.Open>
        <Modal.Window name="user-form">
          <BlockDriverForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default BlockDriver;
