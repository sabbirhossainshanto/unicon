import { useQuery } from "@tanstack/react-query";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

const useCurrentBets = (eventId) => {
  const token = useSelector(userToken);
  const { data: myBets = [], refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    queryFn: async () => {
      try {
        const generatedToken = handleRandomToken();
        const encryptedData = handleEncryptData({
          token: generatedToken,
          site: settings.siteUrl,
        });
        const response = await fetch(
          `${API.currentBets}/${eventId || "sports"}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(encryptedData),
          }
        );

        const data = await response.json();
        console.log(data);
        if (data.success) {
          return data.result;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    gcTime: 0,
  });
  return { myBets, refetchCurrentBets };
};

export default useCurrentBets;