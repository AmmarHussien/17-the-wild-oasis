import Input from "../../../ui/Input";
import Form from "../../../ui/Form";
import { useForm } from "react-hook-form";
import FormRow from "../../../ui/FormRow";
import { useCreateCabin } from "../../cabins/useCreateCabin";
import useEditCabin from "../../cabins/useEditCabin";
import styled from "styled-components";
import { Button } from "@mui/material";
import DropDownMenu from "../../../ui/DropDownMenu";

function BlockDriverForm({ cabinToEdit = {}, onCloseModal }) {
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
        <DropDownMenu
          title="Obtion"
          options={["Option 1", "Option 2", "Option 3"]}
        />
      </FormRow>

      <FormRow error={errors?.reason?.message}>
        <Input
          placeholder="reason"
          type="text"
          id="text"
          {...register("text", {
            required: "This Field is required",
            min: {
              value: 1,
              message: "REason should be at least 1",
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
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default BlockDriverForm;
