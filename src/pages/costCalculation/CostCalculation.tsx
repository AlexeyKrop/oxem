import React, {useState} from 'react';
import {InputFullPrice} from "./inputFullPrice/InputFullPrice";
import {InputPayment} from "./inputPayment/InputPayment";
import {InputCreditTerm} from "./inputСreditTerm/InputCreditTerm";
const MAX_PRICE = 6000000
const MIN_PRICE = 1000000
export const CostCalculation: React.FC = () => {
  const [fullPrice, setFullPrice] = useState<any>(MIN_PRICE)
  return (
    <div>
      <InputFullPrice maxValue={MAX_PRICE} minValue={MIN_PRICE} value={fullPrice} setValue={setFullPrice} />
      <InputPayment fullPrice={fullPrice} />
      <InputCreditTerm />
    </div>
  );
};
