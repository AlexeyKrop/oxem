import React, {useState} from 'react';
import s from "../inputFullPrice/inputSlider.module.css";
import Slider from "@mui/material/Slider/Slider";
const MAX_PERCENT = 60
const MIN_PERCENT = 10
type InputPaymentType = {
  fullPrice: number
}
export const InputPayment: React.FC<InputPaymentType> = ({fullPrice}) => {
  const [value, setValue] = useState<any>(MIN_PERCENT)
  const downPayment = Math.round(Number(fullPrice) * Number(value) / 100)
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  const handleBlur = () => {
    if (MIN_PERCENT < 0) {
      setValue(MIN_PERCENT);
    } else if (value > MAX_PERCENT) {
      setValue(MAX_PERCENT);
    }
  };
  return (
    <div className={s.wrapper}>
      <Slider
        max={MAX_PERCENT}
        min={MIN_PERCENT}
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />
      <input onChange={handleInputChange} value={downPayment} onBlur={handleBlur}/>
      <input className={s.input} value={value}  onChange={handleInputChange} onBlur={handleBlur}
             />
    </div>
  );
};
