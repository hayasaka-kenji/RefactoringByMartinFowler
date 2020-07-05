// インドの都市を選んで都市名と電話番号を返す。
export function acquireData(input) {
  const lines = input.split("\n");
  const result = [];
  const loopItems = lines
          .slice(1) // 1行目を削除
          .filter(line => line.trim() !== '') // 空白行の処理
          .map(line => line.split(','))
          .filter(record => record[1].trim() === "India")
          ;
  for (const line of loopItems) {
    const record = line;
    result.push({city: record[0].trim(), phone: record[2].trim()});
  }
  return result;
}