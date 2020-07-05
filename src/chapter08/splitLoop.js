// 給与totalSalaryと最年少youngestを求める
export function report(people) {
  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }

  function youngest() {
    return Math.min(...people.map(p => p.age));
  }

  return `youngest age: ${youngest()}, total salary: ${totalSalary()}`;
}