"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { coinApi } from "../services/coin-api";
import MainInfoComponent from "../components/coin-info";
import GraphComponent from "../components/graph";
import Link from "next/link";
import styles from "./page.module.css";
import { useAuthWall } from "../hooks/useAuthWall";

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id")!;

  const router = useRouter();
  const authWall = useAuthWall(router);

  const { isPending, data } = useQuery({
    queryKey: ["details", id],
    queryFn: () =>
      Promise.allSettled([coinApi.getOne(id), coinApi.getHistory(id)]),
  });

  if (isPending) {
    return <div className="loading" />;
  }

  if (!data || authWall) {
    return;
  }

  return (
    <div className={styles.page}>
      <MainInfoComponent data={data[0]} />
      <GraphComponent data={data[1]} />
      <Link href="/">
        <button className={styles.navBack}>
          Вернуться к списку криптовалют
        </button>
      </Link>
    </div>
  );
};

export default DetailsPage;
