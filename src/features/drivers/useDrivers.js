import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllDrivers } from "../../services/apiDriver";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useDrivers() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filter Logic
  const filterValue = searchParams.get("status");
  const filter =
    filterValue && filterValue !== "All"
      ? { field: "status", value: filterValue }
      : null;

  // Pagination Logic
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  // Main Query
  const {
    isLoading,
    data: driversData = {}, // Ensure default object
    error,
  } = useQuery({
    queryKey: ["drivers", filter, page],
    queryFn: () => getAllDrivers({ filter, page }),
    keepPreviousData: true,
  });

  const { data: drivers = [], count } = driversData;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Prefetch Next Page
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["drivers", filter, page + 1],
      queryFn: () => getAllDrivers({ filter, page: page + 1 }),
    });
  }

  // Prefetch Previous Page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["drivers", filter, page - 1],
      queryFn: () => getAllDrivers({ filter, page: page - 1 }),
    });
  }

  return { isLoading, drivers, count, error };
}

export default useDrivers;
