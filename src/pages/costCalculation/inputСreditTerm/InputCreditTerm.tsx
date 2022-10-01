import React, {useState} from "react";
import s from "../inputFullPrice/inputSlider.module.css";
import Slider from "@mui/material/Slider/Slider";
const MAX_TERM = 60
const MIN_TERM = 1
export const InputCreditTerm: React.FC = () => {
  const [value, setValue] = useState<any>(MIN_TERM)
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className={s.wrapper}>
      <Slider
        max={MAX_TERM}
        min={MIN_TERM}
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />
      <input className={s.input} value={value}  onChange={handleInputChange}
            />
    </div>
  );
};