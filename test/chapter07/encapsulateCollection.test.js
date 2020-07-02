import { expect } from 'chai';
import { Person, Course } from '../../src/chapter07/encapsulateCollection';

describe('Person', () => {
  it('set courses', () => {
    const aPerson = new Person('Paul');
    const courses = [new Course('Music', true)];

    courses.forEach(course => aPerson.addCourse(course));

    expect(aPerson.name).equal('Paul');
    expect(aPerson.courses).to.eql(courses);
  });
});