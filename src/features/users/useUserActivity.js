import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserActivity } from "../../services/apiUsers";

function useUserActivity() {
  const { Id } = useParams();

  console.log(Id);

  const {
    isLoading,
    data: userActivity,
    error,
  } = useQuery({
    queryKey: ["userActivity", Id],
    queryFn: () => getUserActivity(Id),
    retry: false,
  });
  return { isLoading, userActivity, error };
}

export default useUserActivity;
