import React from 'react';
import Slider from "@mui/material/Slider/Slider";
import s from './inputSlider.module.css'

type InputSliderType = {
  mode?: 'payment' | 'all'
  initialPayment?: number
  title: string
  maxValue: number
  minValue: number
  value: number
  setValue: (value: number | number[]) => void
}
export const InputSlider: React.FC<InputSliderType> = ({
                                                         value,
                                                         setValue,
                                                         minValue,
                                                         maxValue,
                                                         title,
                                                         initialPayment,
                                                         mode
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
    <div className={s.wrapper}>
      <p>{title}</p>
      <Slider
        className={s.slider}
        max={maxValue}
        min={minValue}
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />
      {mode === 'payment' &&
      <input className={s.inputPercent} onChange={handleInputChange} value={value}
             onBlur={handleBlur}/>}
      <input className={s.input} value={value} onChange={handleInputChange}
             onBlur={handleBlur}/>

    </div>
  );
};
