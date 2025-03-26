"use client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { coinApi } from "../services/coin-api";
import MainInfoComponent from "../components/coin-info";
import GraphComponent from "../components/graph";

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id")!;

  const { isPending, data } = useQuery({
    queryKey: ["details", id],
    queryFn: () =>
      Promise.allSettled([coinApi.getOne(id), coinApi.getHistory(id)]),
  });

  if (isPending) {
    return <div className="loading" />;
  }

  if (!data) {
    return;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <MainInfoComponent data={data[0]} />
      <GraphComponent data={data[1]} />
    </div>
  );
};

export default DetailsPage;
