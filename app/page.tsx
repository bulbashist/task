"use client";
import { SortOption, TableComponent } from "./components/table";
import { useAuthWall } from "./hooks/useAuthWall";
import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { useCoinsQuery } from "./hooks/useCoinsQuery";

const MainPage = () => {
  const { isPending, data, error, fetchNextPage } = useCoinsQuery();
  const router = useRouter();
  const authWall = useAuthWall(router);

  const [input, setInput] = useState("");
  const [sortOption, setSortOption] = useState<SortOption | null>(null);

  const onEnterInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") router.push(`/?search=${e.currentTarget.value}`);
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (authWall) return;

  const records = data?.pages.reduce((prev, curr) => prev.concat(curr), []);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div />
          <div className={styles.inputWrapper}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onEnterInput}
            />
            <button>
              <Link href={`/?search=${input}`}>🔍</Link>
            </button>
          </div>
          <button className={styles.logout} onClick={logout}>
            Выход
          </button>
        </header>
        <TableComponent
          data={records}
          error={error}
          fetchNextPage={fetchNextPage}
          isPending={isPending}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>
    </div>
  );
};

export default MainPage;
