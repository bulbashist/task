"use client";
import { useRouter } from "next/navigation";
import MainInfoComponent from "../components/coin-info";
import GraphComponent from "../components/graph";
import Link from "next/link";
import styles from "./page.module.css";
import { useAuthWall } from "../hooks/useAuthWall";
import { useDetailsQuery } from "./hooks/useDetailsQuery";

const DetailsPage = () => {
  const { isPending, data } = useDetailsQuery();
  const router = useRouter();
  const authWall = useAuthWall(router);

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
