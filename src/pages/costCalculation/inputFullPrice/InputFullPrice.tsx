import Slider from '@mui/material/Slider/Slider';
import React from 'react';


type InputFullPriceType = {
  maxValue: number
  minValue: number
  value: number
  setValue: (value: number | number[]) => void
}
export const InputFullPrice: React.FC<InputFullPriceType> = ({
                                                               value,
                                                               setValue,
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
    } else if (value > maxValue) {
      setValue(maxValue);
    }
  };
  return (
    <div >
      <p>Стоимость автомобиля</p>
      <Slider
        max={maxValue}
        min={minValue}
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />
      <input value={value} onChange={handleInputChange}
             onBlur={handleBlur}/>

    </div>
  );
};
