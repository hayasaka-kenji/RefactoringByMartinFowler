function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    // 一時的にclass定義をここに追加。
    class PerformanceCalculator {
      constructor(aPerformance, aPlay) {
        this.performances = aPerformance;
        this.play = aPlay;
      }

      get amount() {
        let result = 0;
        switch (this.play.type) {
          case "tragedy":
            result = 40000;
            if (this.performances.audience > 30) {
              result += 1000 * (this.performances.audience - 30);
            }
            break;
          case "comedy":
            result = 30000;
            if (this.performances.audience > 20) {
              result += 10000 + 500 * (this.performances.audience - 20);
            }
            result += 300 * this.performances.audience;
            break;
          default:
            throw new Error(`unknown type: ${this.play.play.type}`);
        }
        return result;
      }

      get volumeCredits() {
        let result = 0;
        result += Math.max(this.performances.audience - 30, 0);
        if ("comedy" === this.play.type) result += Math.floor(this.performances.audience / 5);
        return result;
      }
    }

    const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
  }

  function volumeCreditsFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
  }

  function totalAmount(data) {
    return data.performances
      .reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances
      .reduce((total, p) => total + p.volumeCredits, 0);
  }
};

module.exports = createStatementData;