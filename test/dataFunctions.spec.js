import { filterData, sortData, computeStats} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
console.log(fakeData);

describe("filterData", () => {
  it("returns `filterData`", () => {
    console.log("fakeData:", fakeData);
    const gender = filterData(fakeData, "gender", "Hembra");
    expect(gender.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const species = filterData(fakeData, "speciesGroup", "Domestico");
    expect(species.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const film = filterData(fakeData, "filmGenre", "Drama");
    expect(film.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const film = filterData(fakeData, "filmGenre", "Musical");
    expect(film.length).toBe(2);
  });
});

describe("sortData", () => {
  it("returns `sortData`", () => {
    const orderAsc = sortData(fakeData, "name", "ascendente");
    expect(orderAsc[0].name).toBe("Figaro");
  });
  it("returns `sortData`", () => {
    const orderDesc = sortData(fakeData, "name", "descendente");
    expect(orderDesc[1].name).toBe("Pascal");
  });
});
//computeStats calcula correctamente el porcentaje de hembras que hay en fakeData
describe('computeStats',()=>{
  it('returns `sortData`',() =>{
    const porcentaje = computeStats(data, value);
    expect(porcentaje)
  });
});
