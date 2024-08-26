import { useQuery } from "@tanstack/react-query";
import { getDriver } from "../../../services/apiDriver";

function useDriver(id) {
  const {
    isLoading,
    data: driverData = {}, // Ensure default object
    error,
  } = useQuery({
    queryKey: ["driver", id],
    queryFn: () => getDriver(id),
  });
  return { isLoading, driverData, error };
}
export default useDriver;
