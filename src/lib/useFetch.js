import useSWR from "swr";
import fetcher from "./fetcher";

export const useCaravans = () => {
  const { data, error } = useSWR("/data", fetcher);
  return {
    caravans: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
