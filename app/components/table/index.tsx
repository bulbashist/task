import { useObserver } from "@/app/hooks/useObserver";
import { convertToFixed } from "@/app/services/utility";
import { Coin } from "@/types/coin";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import styles from "./style.module.css";
import { AxiosError } from "axios";
import { useVirtualization } from "@/app/hooks/useVirtualisation";

type SortOption = {
  field: keyof Coin;
  asc: boolean;
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

type Props = {
  isPending: boolean;
  data: { pages: Array<Coin[]> } | undefined;
  error: AxiosError | null;
  fetchNextPage: () => void;
};

export const TableComponent = ({
  isPending,
  data,
  error,
  fetchNextPage,
}: Props) => {
  const [sortOption, setSortOption] = useState<SortOption>({
    field: "rank",
    asc: true,
  });

  const observableRef = useObserver(fetchNextPage);

  //rowHeight = 39
  const {
    topCount: top,
    bottomCount: bottom,
    rowHeight,
    ref,
  } = useVirtualization(39);

  const onClickTh = (e: MouseEvent<HTMLTableRowElement>) => {
    const field = (e.target as HTMLTableCellElement).dataset.name as keyof Coin;
    setSortOption((prev) => changeSort(prev, field));
  };

  const changeSort = (prev: SortOption, field: keyof Coin) => {
    return prev.field === field
      ? { field, asc: !prev.asc }
      : { field, asc: true };
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
    <div style={{ overflow: "auto" }} ref={ref}>
      <table className={styles.table}>
        <thead>
          <tr
            style={{
              position: "sticky",
              top: 0,
              zIndex: 2,
              backgroundColor: "white",
            }}
            onClick={onClickTh}
          >
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
                <td align="right">${convertToFixed(item.priceUsd)}</td>
                <td align="right">${convertToFixed(item.marketCapUsd)}</td>
                <td align="right">{convertToFixed(item.supply)}</td>
                <td align="right">${convertToFixed(item.volumeUsd24Hr)}</td>
                <td align="center">{item.changePercent24Hr.toFixed(2)}%</td>
              </tr>
            );
          })}
          <tr ref={observableRef} />
        </tbody>
      </table>
    </div>
  );
};
