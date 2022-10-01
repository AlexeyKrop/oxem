import axios from "axios";

type CalculateType = {
  fullPrice: number,
  percentValue: number,
  monthsTermValue: number,
  initialPayment: number
}
export const calculateAPI = {
  sendData(data: CalculateType) {
    return axios.post('https://eoj3r7f3r4ef6v4.m.pipedream.net', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}