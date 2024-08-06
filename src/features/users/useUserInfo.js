import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../services/apiUsers";

function useUserInfo() {
  const { Id } = useParams();

  console.log(Id);

  const {
    isLoading,
    data: userInfo,
    error,
  } = useQuery({
    queryKey: ["userInfo", Id],
    queryFn: () => getUserInfo(Id),
    retry: false,
  });
  return { isLoading, userInfo, error };
}

export default useUserInfo;
