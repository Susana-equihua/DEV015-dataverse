import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('example', () => {

  it('returns `example`', () => {
    expect(filterData()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(sortData()).toBe('OMG');
  });
});
