import { expect } from 'chai';
import { report } from '../../src/chapter08/splitLoop.js';

describe('report', () => {

  it('Test the report with data', () => {
    const aPeople = [
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
    expect(report(aPeople)).equal('youngest age: 30, total salary: 180');
  });

  it('Test if it is empty data', () => {
    const aPeople = [];
    expect(report(aPeople)).equal('youngest age: Infinity, total salary: 0');
  });
});
