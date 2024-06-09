import axios from "axios";
import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ phone, password }) {
  try {
    const response = await axios.post(
      "https://route-service.app/user-api/v1/login",
      {
        country_code: "02",
        phone,
        password,
        device_token:
          "cakDRZeZDjs:APA91bFhznZOVm1pvAWDPHpvWJyWY6ue8C5hX1wLX95ZQDHdnjv1kD47hHMK3QRIipV4FpMsA2FlyDG9FjEx4OXdI17LJIXrVFtwjgo3cC_EKBcS2Mg0MoKrEHDTcRh5XDs1lDez19Mp",
      }
    );

    if (response && response.data) {
      // Assuming the response contains a token
      const { access_token } = response.data.data;
      localStorage.setItem("authToken", access_token);

      // Redirect or update UI as needed

      return response.data;
    } else {
      throw new Error("Login failed: No response data");
    }
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Login failed due to an unexpected error"
    );
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. update password or username

  let updateData;

  if (password) updateData = { password };

  if (fullName)
    updateData = {
      data: {
        fullName,
      },
    };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // 2. uploud avatar image

  const fileName = `avatar=${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. update avatar in the user

  const { data: updatedUser, error: updatedError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updatedError) throw new Error(updatedError.message);

  return updatedUser;
}
