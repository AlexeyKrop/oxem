import React from 'react';
import Slider from "@mui/material/Slider/Slider";

type InputPaymentType = {
  downPayment: number
  percentValue: number
  setValue: (value: any) => void
  maxValue: number
  minValue: number
}
export const InputPayment: React.FC<InputPaymentType> = ({
                                                           downPayment,
                                                           setValue,
                                                           percentValue,
                                                           minValue,
                                                           maxValue
                                                         }) => {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  const handleBlur = () => {
    if (minValue < 0) {
      setValue(minValue);
    } else if (percentValue > maxValue) {
      setValue(maxValue);
    }
  };
  return (
    <>
      <Slider
        max={maxValue}
        min={minValue}
        value={percentValue}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />
      <input onChange={handleInputChange} value={downPayment}
             onBlur={handleBlur}/>
      <input value={percentValue}
             onChange={handleInputChange} onBlur={handleBlur}
      />

    </>
  );
};
