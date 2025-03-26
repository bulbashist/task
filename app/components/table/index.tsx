import { useObserver } from "@/app/hooks/useObserver";
import { coinApi } from "@/app/services/coin-api";
import { convert } from "@/app/services/utility";
import { Coin } from "@/types/coin";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import styles from "./style.module.css";
import { useSearchParams } from "next/navigation";
import { AxiosError } from "axios";
import { useVisualization } from "@/app/hooks/useVisualisation";

type SortOption = {
  field: keyof Coin;
  asc: boolean;
};

const changeSort = (prev: SortOption, field: keyof Coin) => {
  return prev.field === field
    ? { field, asc: !prev.asc }
    : { field, asc: true };
};

const headData: Array<{ field: keyof Coin; name: string }> = [
  { field: "rank", name: "Рейтинг" },
  { field: "name", name: "Название" },
  { field: "priceUsd", name: "Стоимость" },
  { field: "marketCapUsd", name: "Капитализация" },
  { field: "supply", name: "Количество" },
  { field: "volumeUsd24Hr", name: "Объем (24 часа)" },
  { field: "changePercent24Hr", name: "Изменение цены (24 часа)" },
];

export const TableComponent = () => {
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
    // refetchInterval: 10 * 1000,
  });

  const [sortOption, setSortOption] = useState<SortOption>({
    field: "rank",
    asc: true,
  });

  const observableRef = useObserver(fetchNextPage);

  //rowHeight = 39
  const [top, bottom, rowHeight] = useVisualization(39);

  const onClickTh = (e: MouseEvent<HTMLTableRowElement>) => {
    const field = (e.target as HTMLTableCellElement).dataset.name as keyof Coin;
    setSortOption((prev) => changeSort(prev, field));
  };

  const isArrow = (field: keyof Coin) => {
    if (sortOption.field !== field) return;
    return sortOption.asc ? "↑" : "↓";
  };

  if (isPending) {
    return <div className="loading" />;
  }

  if (error) {
    return <h2 style={{ margin: 50 }}>Ошибка</h2>;
  }

  if (!data) {
    return;
  }

  // if (authWall) return;

  const records = data.pages.reduce((prev, curr) => prev.concat(curr), []);
  records.sort((a, b) => {
    if (sortOption.asc) {
      return a[sortOption.field] > b[sortOption.field] ? 1 : -1;
    } else return a[sortOption.field] < b[sortOption.field] ? 1 : -1;
  });

  if (records.length === 0) {
    return <h2 style={{ margin: 50 }}>Не найдено</h2>;
  }

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr onClick={onClickTh}>
            {headData.map((column, i) => (
              <th key={i} data-name={column.field}>
                {column.name} {isArrow(column.field)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: Math.max(top * rowHeight, 0) }}></tr>
          {records.map((item, index) => {
            if (index < top || index > bottom) return;

            return (
              <tr key={item.rank} className={styles.row}>
                <td align="center">{item.rank}</td>
                <td>
                  <Link href={`/details?id=${item.id}`}>{item.name}</Link>
                </td>
                <td align="right">${convert(item.priceUsd)}</td>
                <td align="right">${convert(item.marketCapUsd)}</td>
                <td align="right">{convert(item.supply)}</td>
                <td align="right">${convert(item.volumeUsd24Hr)}</td>
                <td align="center">{item.changePercent24Hr.toFixed(2)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div ref={observableRef} />
    </>
  );
};
