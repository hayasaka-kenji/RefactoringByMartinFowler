// 障害手当を計算する
export function disabilityAmount(anEmployee) {
  if (isNotEligibkeForDisability()) return 0;
  return 2; // 手当があった場合

  function isNotEligibkeForDisability() {
    return ((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime));
  }
}