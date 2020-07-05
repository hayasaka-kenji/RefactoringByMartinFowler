import { expect } from 'chai';
import { report } from '../../src/chapter08/splitLoop.js';

describe('report', () => {
  const data = [
    {
      age: 30,
      salary: 30
    },
    {
      age: 67,
      salary: 100
    },
    {
        age: 42,
        salary: 50
    }
  ];

  it('Test the report with data', () => {
    expect(report(data)).equal('youngest: 30, totalSalary: 180');
  });
});
