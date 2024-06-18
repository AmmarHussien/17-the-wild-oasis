import Input from "../../../ui/Input";
import Form from "../../../ui/Form";
import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import { useCreateCabin } from "../../cabins/useCreateCabin";
import useEditCabin from "../../cabins/useEditCabin";
import styled from "styled-components";
import { Button } from "@mui/material";

function EditUserForm({ cabinToEdit = {}, onCloseModal }) {
  const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const { id: editId, ...editValue } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin();

  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    //console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "model" : "regular"}
    >
      <Title>Please complete filling these data</Title>

      <FormRow error={errors?.name?.message}>
        <Input
          placeholder="User Name"
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This Field is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.phoneNumber?.message}>
        <Input
          placeholder="Phone Number"
          type="tel"
          id="phoneNumber"
          disabled={isWorking}
          {...register("phoneNumber", {
            required: "This Field is required",
            min: {
              value: 1,
              message: "phoneNumber should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.email?.message}>
        <Input
          placeholder="Email Address"
          type="email"
          id="email"
          {...register("email", {
            required: "This Field is required",
            min: {
              value: 1,
              message: "Email should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variant="contained"
          //startIcon={<AddIcon />}
          sx={{
            width: 327,
            height: 56,
            Padding: "12 24",
            gap: 4,
            borderRadius: 16,
            fontSize: 16,
            background: "#005379",
            shadow: "0 4 60 0 #0038FF26",
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          sx={{
            width: 327,
            height: 56,
            Padding: "12 24",
            gap: 4,
            borderRadius: 16,
            fontSize: 16,
            background: "#FEE2E2",
            shadow: "0 4 60 0 #0038FF26",
            color: "#FC5555",
          }}
        >
          Block
        </Button>
      </FormRow>
    </Form>
  );
}

export default EditUserForm;
