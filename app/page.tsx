"use client";
import { TableComponent } from "./components/table";
import { useAuthWall } from "./hooks/useAuthWall";
import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

const MainPage = () => {
  const router = useRouter();
  const authWall = useAuthWall(router);

  const [input, setInput] = useState("");

  const onEnterInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") router.push(`/?search=${e.currentTarget.value}`);
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (authWall) return;

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
        <TableComponent />
      </div>
    </div>
  );
};

export default MainPage;

{
  /* {data.pages.map((page) => {
              return page.map((item) => (
                <tr key={item.id}>
                  <td>{item.rank}</td>
                  <td>
                    <Link href={`/details?id=${item.id}`}>{item.name}</Link>
                  </td>
                  <td align="right">${convert(item.priceUsd)}</td>
                  <td align="right">${convert(item.marketCapUsd)}</td>
                  <td align="right">{convert(item.supply)}</td>
                  <td align="right">${convert(item.volumeUsd24Hr)}</td>
                  <td align="right">{item.changePercent24Hr.toFixed(2)}%</td>
                </tr>
              ));
            })} */
}
