import { useSearchParams } from "next/navigation";
import { coinApi } from "../services/coin-api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Coin } from "@/types/coin";
import { AxiosError } from "axios";

const useCoinsQuery = () => {
  const search = useSearchParams().get("search") ?? "";
  const { isPending, data, error, fetchNextPage } = useInfiniteQuery<
    Coin[],
    AxiosError,
    { pages: Array<Coin[]> },
    unknown[],
    number
  >({
    queryKey: ["main", search],
    queryFn: ({ pageParam }) => coinApi.getMany(pageParam, search),
    initialPageParam: 0,
    getNextPageParam: (data, _, page) => (data.length > 0 ? ++page : null),
    refetchInterval: 10 * 1000,
  });

  return { isPending, data, error, fetchNextPage };
};

export { useCoinsQuery };
