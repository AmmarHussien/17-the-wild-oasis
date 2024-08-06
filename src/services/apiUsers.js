import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getUsers({ filter, sortBy, page }) {
  let query = supabase.from("users").select("*", {
    count: "exact",
  });

  // filter
  //if (filter != null) query = query.eq(filter.field, filter.value);

  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  //sort

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  //Pagenation

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + (PAGE_SIZE - 1);
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Users could not be loaded");
  }

  return { data, count };
}

export async function getUserInfo(id) {
  const { data, error } = await supabase
    .from("users")
    .select("name,email,phone_number,startDate")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("User not found");
  }

  return data;
}

export async function getUserActivity(id) {
  const { data, error } = await supabase
    .from("users")
    .select("car_make,car_model,model_year,rate,wallet_balance")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("User not found");
  }

  return data;
}
