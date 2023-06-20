import {
  Block,
  ButtonPanel,
  ColorElement,
  ColorList,
  FilterList,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../../store/filters";
import { IconColor, IconOrientation, IconSize } from "../../../assets/icons";
import { setPhotos } from "../../../store/photos";
import { useParams } from "react-router";

import orientationOptions from "./orientation-options.json";
import sizeOptions from "./size-options.json";
import colorOptions from "./color-options.json";
import { useRef } from "react";

const data = [
  { category: "Фото", total: "· 140,4 тысяч" },
  { category: "Видео", total: "· 18,5 тысяч" },
  { category: "Пользователи", total: "· 379" },
];

export const FilterPanel = () => {
  const { search } = useParams();
  const { orientation, size, color } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const colorInput = useRef(null);

  return (
    <Block>
      <ButtonPanel>
        {data.map((piece, i) => (
          <li key={i} className={i === 0 ? "elem active" : "elem"}>
            <span className="elem__category">{piece.category}</span>
            <span className="elem__total">{piece.total}</span>
          </li>
        ))}
      </ButtonPanel>
      <FilterList>
        <li className="list-element">
          <IconOrientation />
          <span>Ориентация</span>
          <ul className="hidden-panel">
            {orientationOptions.map((option, i) => (
              <li
                key={i}
                className={`hidden-panel__option ${
                  option.value === orientation ? "selected" : ""
                }`}
                onClick={() => {
                  dispatch(changeFilters({ orientation: option.value }));
                  dispatch(setPhotos(search));
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </li>
        <li className="list-element">
          <IconSize />
          <span>Размер</span>
          <ul className="hidden-panel">
            {sizeOptions.map((option, i) => (
              <li
                key={i}
                className={`hidden-panel__option ${
                  option.value === size ? "selected" : ""
                }`}
                onClick={() => {
                  dispatch(changeFilters({ size: option.value }));
                  dispatch(setPhotos(search));
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </li>
        <li className="list-element">
          <IconColor />
          <span>Цвет</span>
          <div className="hidden-panel">
            <div
              className={`hidden-panel__option ${
                color === null ? "selected" : ""
              }`}
              onClick={() => {
                dispatch(changeFilters({ color: null }));
                dispatch(setPhotos(search));
              }}
            >
              Все цвета
            </div>
            <input
              type="color"
              defaultValue={color}
              className="color-input"
              ref={colorInput}
              onBlur={(e) => {
                dispatch(changeFilters({ color: e.currentTarget.value }));
                dispatch(setPhotos(search));
              }}
            />
            <ColorList>
              {colorOptions.map((color, i) => (
                <li key={i}>
                  <ColorElement
                    color={color}
                    onClick={() => {
                      colorInput.current.value = color;
                      dispatch(changeFilters({ color }));
                      dispatch(setPhotos(search));
                    }}
                  />
                </li>
              ))}
            </ColorList>
          </div>
        </li>
      </FilterList>
    </Block>
  );
};
