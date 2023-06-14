import { useDispatch } from "react-redux";
import { Block } from "./styles";
import { changeFilters } from "../../../../store/photos/filters";
import { useRef } from "react";

export const FilterPanel = () => {
  const dispatch = useDispatch();

  const color = useRef("#bababa");

  return (
    <Block>
      <li>
        <select
          onChange={(e) =>
            dispatch(
              changeFilters({
                orientation: e.target.value ? e.target.value : null,
              })
            )
          }
        >
          <option value="">Все варианты ориентации</option>
          <option value="landscape">Горизонтальная</option>
          <option value="portrait">Вертикальная</option>
          <option value="square">Квадратное изображение</option>
        </select>
      </li>
      <li>
        <select
          onChange={(e) =>
            dispatch(
              changeFilters({
                size: e.target.value ? e.target.value : null,
              })
            )
          }
        >
          <option value="">Все размеры</option>
          <option value="large">Большой</option>
          <option value="medium">Средний</option>
          <option value="small">Маленький</option>
        </select>
      </li>
      <li>
        <div className="color-block">
          <input
            type="color"
            defaultValue="#bababa"
            onInput={(e) => (color.current = e.currentTarget.value)}
            className="color-block__input"
          />
          <button
            className="color-block__submit"
            onClick={() => {
              console.log(color.current);
              dispatch(
                changeFilters({
                  avg_color: color.current.slice(1),
                })
              );
            }}
          >
            Применить
          </button>
          <button
            className="color-block__submit"
            onClick={() =>
              dispatch(
                changeFilters({
                  avg_color: null,
                })
              )
            }
          >
            Сбросить
          </button>
        </div>
      </li>
    </Block>
  );
};
