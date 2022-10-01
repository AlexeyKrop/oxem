import React from 'react';
type LoanCalculationType = {
  initialPayment: number
  monthsTermValue: number
  fullPrice: number
}
const PERCENT_RATE = 3.5
export const LoanCalculation: React.FC<LoanCalculationType> = ({fullPrice,initialPayment, monthsTermValue}) => {
  // Первоначальный взнос + Срок кредита в месяцах * Ежемесячный платеж

  const monthPay = Math.ceil((fullPrice - initialPayment) * ((PERCENT_RATE / 100 * Math.pow((1 + 0.035), monthsTermValue)) / (Math.pow((1 + PERCENT_RATE / 100), monthsTermValue) - 1)));
  const amountPay = Math.ceil(initialPayment + monthsTermValue * monthPay)
  return (
    <div>
      <span>Сумма договора</span>
      <p>{amountPay}</p>
      <span>Ежемесячный платеж</span>
      <p>{monthPay}</p>
    </div>
  );
};