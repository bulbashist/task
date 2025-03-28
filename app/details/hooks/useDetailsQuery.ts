import { coinApi } from "@/app/services/coin-api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useDetailsQuery = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id")!;
  const { isPending, data } = useQuery({
    queryKey: ["details", id],
    queryFn: () =>
      Promise.allSettled([coinApi.getOne(id), coinApi.getHistory(id)]),
  });

  return { isPending, data };
};

export { useDetailsQuery };
