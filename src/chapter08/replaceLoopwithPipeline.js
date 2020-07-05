// インドの都市を選んで都市名と電話番号を返す。
export function acquireData(input) {
  const lines = input.split("\n");
  const result = lines
          .slice(1) // 1行目を削除
          .filter(line => line.trim() !== '') // 空白行の処理
          .map(line => line.split(',')) // カンマの削除
          .filter(record => record[1].trim() === "India") // 指定したものだけ取り出す。
          .map(record => ({city: record[0].trim(), phone: record[2].trim()})) // 出力の形式に設定。
          ;
  return result;
}