import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import "react-day-picker/dist/style.css";

import { useMoveBack } from "../../hooks/useMoveBack";
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

function AddNewCarService() {
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

  const selectDriver = [
    { value: "toyota", label: "Toyota Camry" },
    { value: "honda", label: "Honda Accord" },
    { value: "ford", label: "Ford Mustang" },
  ];
  const carMake = [
    { value: "toyota", label: "Toyota Camry" },
    { value: "honda", label: "Honda Accord" },
    { value: "ford", label: "Ford Mustang" },
  ];
  const carOptions = [
    { value: "toyota", label: "Toyota Camry" },
    { value: "honda", label: "Honda Accord" },
    { value: "ford", label: "Ford Mustang" },
  ];

  const modelYear = [
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
  ];
  const moveBack = useMoveBack();

  const [selectedCar, setSelectedCar] = useState("");

  const [selectedCarMake, setSelectedCarMake] = useState("");

  const [selectedDriver, setSelectedDriver] = useState("");

  const [selectedModelYear, setSelectedModelYear] = useState("");

  const navigate = useNavigate();

  const handleCarModel = (event) => {
    setSelectedCar(event.target.value);
  };

  const handleSelectDriver = (event) => {
    setSelectedDriver(event.target.value);
  };

  const handleCarMake = (event) => {
    setSelectedCarMake(event.target.value);
  };

  const handleModelYear = (event) => {
    setSelectedModelYear(event.target.value);
  };

  return (
    <Row type="vertical">
      <ButtonText onClick={moveBack}>&larr; Car Services</ButtonText>
      <h1>Add New Service</h1>
      <Row type="horizontal">
        <TextField
          type="text"
          id="username"
          label="User name"
          // This makes this form better for password managers
          autoComplete="username"
          placeholder="User Name"
          sx={{
            width: 366,
            height: 56,
            padding: "2px 4px",
            borderRadius: "16px",
          }}
        />
        <TextField
          type="number"
          id="phoneNumber"
          label="Phone Number"
          // This makes this form better for password managers
          autoComplete="phone number"
          placeholder="Phone Number"
          sx={{
            width: 366,
            height: 56,
            padding: "2px 4px",
            borderRadius: "16px",
          }}
        />
      </Row>
      <Row type="horizontal">
        <Box
          sx={{
            width: 366,
            borderRadius: "16px",
          }}
        >
          <DropdownMenu
            options={selectDriver}
            label="Select Driver"
            value={selectedDriver}
            onChange={handleSelectDriver}
          />
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Request Date"
                sx={{
                  width: 366,
                  height: 56,
                  borderRadius: "16px",
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Row>
      <Row type="horizontal">
        <Box
          sx={{
            width: 366,
            height: 56,
            borderRadius: "16px",
          }}
        >
          <DropdownMenu
            options={carMake}
            label="Car Make"
            value={selectedCarMake}
            onChange={handleCarMake}
          />
        </Box>
        <Box
          sx={{
            width: 366,
            height: 56,
            borderRadius: "16px",
          }}
        >
          <DropdownMenu
            options={carOptions}
            label="Car Model"
            value={selectedCar}
            onChange={handleCarModel}
          />
        </Box>
      </Row>
      <Row type="horizontal">
        <Box
          sx={{
            width: 366,

            borderRadius: "16px",
          }}
        >
          <DropdownMenu
            options={modelYear}
            label="Model Year"
            value={selectedModelYear}
            onChange={handleModelYear}
          />
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{ pt: 0 }}>
              <DatePicker
                label="License Expiry Date"
                sx={{
                  width: 366,
                  height: -10,
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Row>
      <Row type="horizontal">
        <Box>
          <Textarea
            placeholder="Issue Details"
            minRows={7}
            sx={{
              width: 366,
            }}
          />
        </Box>
      </Row>

      <Row type="horizontal">
        <Button
          onClick={() => {
            navigate("/car-services");
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

export default AddNewCarService;
