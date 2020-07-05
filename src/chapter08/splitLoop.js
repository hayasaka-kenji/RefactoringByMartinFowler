// 給与totalSalaryと最年少youngestを求める
export function report(people) {
  let totalSalary = 0;
  let youngest = people[0] ? people[0].age : Infinity;

  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }

  for (const p of people) {
    totalSalary += p.salary;
  }

  return `youngest: ${youngest}, totalSalary: ${totalSalary}`;
}