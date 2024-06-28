import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import "react-day-picker/dist/style.css";

import ButtonText from "../../ui/ButtonText";
import styled, { css } from "styled-components";
import { useState } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom/dist";
import { useMoveBack } from "../../hooks/useMoveBack";
import FileInput from "../../ui/FileInput";

const DropdownMenu = ({ options, label, value, onChange }) => {
  return (
    <FormControl fullWidth sx={{ minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

function AddNewVehicle() {
  const Row = styled.div`
    display: flex;

    ${(props) =>
      props.type === "horizontal" &&
      css`
        justify-content: space-between;
        align-items: center;
        gap: 1.6rem;
      `}

    ${(props) =>
      props.type === "vertical" &&
      css`
        flex-direction: column;
        gap: 1.6rem;
        align-items: start;
      `}
  `;

  const carOptions = [
    { value: "toyota", label: "Toyota Camry" },
    { value: "honda", label: "Honda Accord" },
    { value: "ford", label: "Ford Mustang" },
  ];
  const moveBack = useMoveBack();

  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const handleCarChange = (event) => {
    setVehicleType(event.target.value);
  };

  return (
    <Row type="vertical">
      <ButtonText onClick={moveBack}>&larr; Vehicles</ButtonText>
      <h1>Add New Service</h1>
      <Row type="horizontal">
        <Box
          sx={{
            width: 327,
            borderRadius: "16px",
          }}
        >
          <DropdownMenu
            options={carOptions}
            label="Vehicle Type"
            value={vehicleType}
            onChange={handleCarChange}
          />
        </Box>
        <TextField
          type="text"
          id="typeName"
          label="Type Name"
          // This makes this form better for password managers
          autoComplete="text"
          placeholder="Type Name"
          sx={{
            width: 327,
            height: 56,
            padding: "2px 4px",
            borderRadius: "16px",
          }}
        />
      </Row>
      <Row type="horizontal">
        <TextField
          type="text"
          id="cost_per_KM"
          label="Code for cost per KM"
          // This makes this form better for password managers
          autoComplete="text"
          placeholder="Code for cost per KM"
          sx={{
            width: 327,
            height: 56,
            padding: "2px 4px",
            borderRadius: "16px",
          }}
        />
        <FileInput placeholder="Plate number" icon="🔗" />
      </Row>

      <Row type="horizontal">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]} sx={{ pt: 0 }}>
            <DatePicker
              label="License Expiry Date"
              sx={{
                width: 327,
                height: -10,
              }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
          type="text"
          id="Plate_number"
          label="Plate number"
          // This makes this form better for password managers
          autoComplete="text"
          placeholder="Plate number"
          sx={{
            width: 327,
            height: 56,
            padding: "2px 4px",
            borderRadius: "16px",
          }}
        />
      </Row>
      <Row type="horizontal">
        <Box>
          <Textarea
            placeholder="Vehicle Spec"
            minRows={7}
            sx={{
              width: 327,
            }}
          />
        </Box>
      </Row>

      <Row type="horizontal">
        <Button
          onClick={() => {
            navigate("/vehicles");
          }}
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
          save
        </Button>
      </Row>
    </Row>
  );
}

export default AddNewVehicle;
