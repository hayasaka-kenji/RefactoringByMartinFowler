// 条件記述を逆にして、「ガード節による入れ子の置き換え」
export function adjustedCapital(anInstrument) {
  if (anInstrument.capital <= 0
    || anInstrument.interestRate <= 0
    || anInstrument.duration <= 0) return 0;
  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}