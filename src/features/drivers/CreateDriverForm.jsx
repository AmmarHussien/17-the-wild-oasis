import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "../cabins/useCreateCabin";
import useEditCabin from "../cabins/useEditCabin";
import styled from "styled-components";
import DropDownMenu from "../../ui/DropDownMenu";

function CreateDriverForm({ cabinToEdit = {}, onCloseModal }) {
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
        <FileInput placeholder="Driver Photo" icon="🔗" />
      </FormRow>

      <FormRow>
        <FileInput placeholder="License Photo" icon="🔗" />
      </FormRow>

      <FormRow>
        <DropDownMenu
          title="Car Type"
          options={["Option 1", "Option 2", "Option 3"]}
        />
      </FormRow>

      <FormRow>
        <FileInput placeholder="Vehicle's License" icon="🔗" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}

        <Button>Submit</Button>
      </FormRow>
    </Form>
  );
}

export default CreateDriverForm;
