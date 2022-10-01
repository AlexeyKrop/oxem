import React, {useState} from 'react';
import {InputFullPrice} from "./inputFullPrice/InputFullPrice";
import {InputPayment} from "./inputPayment/InputPayment";
import {InputCreditTerm} from "./inputСreditTerm/InputCreditTerm";
import {LoanCalculation} from "./loanСalculation/LoanCalculation";
const MAX_PRICE = 6000000
const MIN_PRICE = 1000000
const MAX_PERCENT = 60
const MIN_PERCENT = 10
const MAX_TERM = 60
const MIN_TERM = 1
export const CostCalculation: React.FC = () => {
  const [fullPrice, setFullPrice] = useState<any>(MIN_PRICE)
  const [percentValue, setPercentValue] = useState<any>(MIN_PERCENT)
  const [monthsTermValue, setMonthsTermValue] = useState<any>(MIN_TERM)
  const initialPayment = Math.round(Number(fullPrice) * Number(percentValue) / 100)
  return (
    <div>
      <InputFullPrice maxValue={MAX_PRICE} minValue={MIN_PRICE} value={fullPrice} setValue={setFullPrice} />
      <InputPayment maxValue={MAX_PERCENT} minValue={MIN_PERCENT} downPayment={initialPayment} setValue={setPercentValue} percentValue={percentValue} />
      <InputCreditTerm maxValue={MAX_TERM} minValue={MIN_TERM} value={monthsTermValue} setValue={setMonthsTermValue} />
      <LoanCalculation fullPrice={fullPrice} monthsTermValue={monthsTermValue} initialPayment={initialPayment} />
    </div>
  );
};
