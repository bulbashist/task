import { convert } from "@/app/services/utility";
import { Coin } from "@/types/coin";
import styles from "./style.module.css";

type Props = {
  data: PromiseSettledResult<Coin>;
};

const MainInfoComponent = ({ data }: Props) => {
  if (data.status === "rejected") {
    return <h2 style={{ margin: 50 }}>Не удалось загрузить данные</h2>;
  }

  return (
    <section className={styles.mainInfo}>
      <div className={styles.grid}>
        <div className={styles.grid1}>
          <div>
            <div className={styles.flag}>
              <h1>{data.value.rank}</h1>
              <p>Ранг</p>
            </div>
          </div>
          <div className={styles.leftBlock}>
            <h1>
              <span>
                {data.value.name} ({data.value.symbol})
              </span>
            </h1>
            <h3>${convert(data.value.priceUsd)}</h3>
            <h3
              style={{
                color: data.value.changePercent24Hr > 0 ? "greenyellow" : "red",
              }}
            >
              {convert(data.value.changePercent24Hr)}%
            </h3>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div>
            <p>Капитализация</p>
            <h3>${convert(data.value.marketCapUsd)}</h3>
          </div>
          <div>
            <p>Объем (24 часа)</p>
            <h3>${convert(data.value.volumeUsd24Hr)}</h3>
          </div>
          <div>
            <p>Количество</p>
            <h3>{convert(data.value.supply)}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainInfoComponent;
