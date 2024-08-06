import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getUsers } from "../../services/apiUsers";

function useUsers() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // 1) filter
  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //{ field: "status", value: filterValue, method: "gte" };

  // 2) sort

  const sortByRow = searchParams.get("sortBy") || "startDate-desc";

  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  //PAGIN

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //query
  const {
    isLoading,
    data: { data: users, count } = {},
    error,
  } = useQuery({
    queryKey: ["users", filter, sortBy, page],
    queryFn: () => getUsers({ filter, sortBy, page }),
  });

  // pre-fatching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["users", filter, sortBy, page + 1],
      queryFn: () => getUsers({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["users", filter, sortBy, page - 1],
      queryFn: () => getUsers({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, users, error, count };
}

export default useUsers;
