import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import styled from "styled-components";
import DropDownMenu from "../../ui/DropDownMenu";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateRideForm({ cabinToEdit = {}, onCloseModal }) {
  const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const [startDate, setStartDate] = useState(new Date());

  const { id: editId, ...editValue } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  const { errors } = formState;

  function onError(errors) {
    //console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onError)}
      type={onCloseModal ? "model" : "regular"}
    >
      <Title>Please complete filling these data</Title>

      <FormRow>
        <DropDownMenu
          title="Select Driver"
          options={["Option 1", "Option 2", "Option 3"]}
        />
      </FormRow>

      <FormRow>
        <DropDownMenu
          title="Select User"
          options={["Option 1", "Option 2", "Option 3"]}
        />
      </FormRow>

      <FormRow error={errors?.DestinationA?.message}>
        <Input
          placeholder="Destination A"
          type="text"
          id="DestinationA"
          //disabled={isWorking}
          {...register("Destination A", {
            required: "This Field is required",
          })}
        />
      </FormRow>

      <FormRow error={errors?.DestinationB?.message}>
        <Input
          placeholder="Destination B"
          type="text"
          id="DestinationB"
          //disabled={isWorking}
          {...register("Destination B", {
            required: "This Field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
      </FormRow>

      <FormRow>
        <Button>Submit</Button>
      </FormRow>
    </Form>
  );
}

export default CreateRideForm;
