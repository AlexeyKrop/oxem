import React from 'react';
import s from './loanCalculation.module.css'

type LoanCalculationType = {
  initialPayment: number
  monthsTermValue: number
  fullPrice: number
}
const PERCENT_RATE = 3.5
export const LoanCalculation: React.FC<LoanCalculationType> = ({
                                                                 fullPrice,
                                                                 initialPayment,
                                                                 monthsTermValue
                                                               }) => {

  const monthPay = Math.ceil((fullPrice - initialPayment) * ((PERCENT_RATE / 100 * Math.pow((1 + 0.035), monthsTermValue)) / (Math.pow((1 + PERCENT_RATE / 100), monthsTermValue) - 1)));
  const amountPay = Math.ceil(initialPayment + monthsTermValue * monthPay)
  return (
    <div className={s.wrapperPrice}>
      <div className={s.content}><span className={s.title}>Сумма договора</span>
        <p className={s.price}>{amountPay}</p></div>
      <div className={s.content}><span className={s.title}>Ежемесячный платеж</span>
        <p className={s.price}>{monthPay}</p></div>
    </div>

  )
    ;
};