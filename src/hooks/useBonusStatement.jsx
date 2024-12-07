import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

const useBonusStatement = () => {
  const token = useSelector(userToken);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["bonus-statement"],

    queryFn: async () => {
      const res = await axios.post(
        API.bonus,
        {
          type: "viewStatement",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = res?.data;
      if (result?.success) {
        return result?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetch, isLoading };
};

export default useBonusStatement;
