import useSWR from "swr";
import fetcher from "./fetcher";

export const useCaravans = (param) => {
  const { data, error } = useSWR(`/${param}`, fetcher);

  return {
    caravans: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
