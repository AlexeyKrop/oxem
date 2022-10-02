import React, {useState} from 'react';
import {LoanCalculation} from "./loanСalculation/LoanCalculation";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {calculateAPI} from "../../api/calculate";
import {InputSlider} from "./inputSlider/InputSlider";
import s from './costCalculation.module.css'

const MAX_PRICE = 6000000
const MIN_PRICE = 1000000
const MAX_PERCENT = 60
const MIN_PERCENT = 10
const MAX_TERM = 60
const MIN_TERM = 1

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9514',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export const CostCalculation: React.FC = () => {
  const [fullPrice, setFullPrice] = useState<any>(MIN_PRICE)
  const [percentValue, setPercentValue] = useState<any>(MIN_PERCENT)
  const [monthsTermValue, setMonthsTermValue] = useState<any>(MIN_TERM)
  const [disabled, setDisabled] = useState(false)
  const initialPayment = Math.round(Number(fullPrice) * Number(percentValue) / 100)
  const handleClick = () => {
    setDisabled(true)
    calculateAPI.sendData({
      fullPrice,
      percentValue,
      monthsTermValue,
      initialPayment
    }).then(res => console.log(res))
      .catch(err => console.log(err))
    setTimeout(() => {
      setDisabled(false)
    }, 2000)
  }
  return (
    <ThemeProvider theme={theme}>
      <h2 className={s.title}>Рассчитайте стоимость автомобиля в лизинг</h2>
      <div className={s.wrapper}>
        <InputSlider
          temp={'₽'}
          title={'Стоимость автомобиля'}
          maxValue={MAX_PRICE}
          minValue={MIN_PRICE}
          value={fullPrice}
          setValue={setFullPrice}/>
        <InputSlider title='Первоначальный взнос' mode={'payment'}
                     temp={'₽'}
                     initialPayment={initialPayment}
                     maxValue={MAX_PERCENT} minValue={MIN_PERCENT} value={percentValue}
                     setValue={setPercentValue}/>
        <InputSlider
          temp={'мес.'}
          title={'Срок лизинга'} maxValue={MAX_TERM} minValue={MIN_TERM}
          value={monthsTermValue} setValue={setMonthsTermValue}/>

        <LoanCalculation fullPrice={fullPrice}
                         monthsTermValue={monthsTermValue}
                         initialPayment={initialPayment}/>
        <div className={s.btnBlock}>
          <button
            disabled={disabled}
            className={s.btn}
            onClick={handleClick}
          >
            Оставить заявку
          </button>
        </div>

      </div>
    </ThemeProvider>
  );
};
