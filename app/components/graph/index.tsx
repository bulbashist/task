import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./style.module.css";
import { Bar } from "@/types/history";

type Props = {
  data: PromiseSettledResult<Bar[]>;
};

const GraphComponent = ({ data }: Props) => {
  if (data.status === "rejected") {
    return <h2 style={{ margin: 50 }}>Не удалось загрузить данные</h2>;
  }

  const graphData = data.value.map((record) => ({
    priceUsd: record.priceUsd,
    date: new Date(record.time).toLocaleDateString(),
  }));

  return (
    <section className={styles.wrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={[
              (dataMin: number) => Math.floor(dataMin),
              (dataMax: number) => Math.ceil(dataMax),
            ]}
          />
          <Tooltip formatter={(v) => (+v).toFixed(2)} />
          <Area
            type="monotone"
            dataKey="priceUsd"
            stroke="#82ca9d"
            fillOpacity={0.2}
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default GraphComponent;
