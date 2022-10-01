import React from "react";
import s from "../inputFullPrice/inputFullPrice.module.css";
import Slider from "@mui/material/Slider/Slider";

type InputCreditTermType = {
  value: number
  setValue: (value: any) => void
  maxValue: number
  minValue: number
}
export const InputCreditTerm: React.FC<InputCreditTermType> = ({
                                                                 setValue,
                                                                 value,
                                                                 minValue,
                                                                 maxValue
                                                               }) => {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <>
      <p>Срок лизинга</p>
      <div className={s.wrapper}>
        <Slider
          className={s.slider}
          max={maxValue}
          min={minValue}
          value={value}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
        <input className={s.input} value={value} onChange={handleInputChange}
        />
      </div>
    </>
  );
};