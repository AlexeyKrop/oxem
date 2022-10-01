import React from "react";
import Slider from "@mui/material/Slider/Slider";

type InputCreditTermType = {
  value: number
  setValue: (value: number | number[]) => void
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
        <Slider
          max={maxValue}
          min={minValue}
          value={value}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
        <input value={value} onChange={handleInputChange}
        />
    </>
  );
};