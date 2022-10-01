import React, {useState} from 'react';
import {InputFullPrice} from "./inputFullPrice/InputFullPrice";
import {InputPayment} from "./inputPayment/InputPayment";
import {InputCreditTerm} from "./inputСreditTerm/InputCreditTerm";
import {LoanCalculation} from "./loanСalculation/LoanCalculation";
import s from './costCalculation.module.css'
import {createTheme, ThemeProvider} from '@mui/material/styles'

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
  const initialPayment = Math.round(Number(fullPrice) * Number(percentValue) / 100)
  return (
    <ThemeProvider theme={theme}>
      <div className={s.wrapper}>
        <h2>Рассчитайте стоимость автомобиля в лизинг</h2>
        <div className={s.inputWrapper}>
          <div className={s.fullPrice}>
            <InputFullPrice maxValue={MAX_PRICE}
                            minValue={MIN_PRICE}
                            value={fullPrice}
                            setValue={setFullPrice}/></div>
          <div className={s.payment}><InputPayment maxValue={MAX_PERCENT}
                                                   minValue={MIN_PERCENT}
                                                   downPayment={initialPayment}
                                                   setValue={setPercentValue}
                                                   percentValue={percentValue}/></div>
          <div className={s.creditTerm}><InputCreditTerm maxValue={MAX_TERM}
                                                         minValue={MIN_TERM}
                                                         value={monthsTermValue}
                                                         setValue={setMonthsTermValue}/>
          </div>
          <div className={s.loanCalculation}><LoanCalculation fullPrice={fullPrice}
                                                              monthsTermValue={monthsTermValue}
                                                              initialPayment={initialPayment}/>
          </div>

        </div>
      </div>
    </ThemeProvider>
  );
};
