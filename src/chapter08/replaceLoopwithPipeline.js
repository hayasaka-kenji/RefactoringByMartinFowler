// インドの都市を選んで都市名と電話番号を返す。
export function acquireData(input) {
  const lines = input.split("\n");
  return lines
        .slice(1)
        .filter(line => line.trim() !== '')
        .map(line => line.split(','))
        .filter(fields => fields[1].trim() === "India")
        .map(fields => ({city: fields[0].trim(), phone: fields[2].trim()}))
        ;
}