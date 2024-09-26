import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service"
import { SharedService } from "./shared.service";

describe('CalcService',  () => {
  let shared: jasmine.SpyObj<SharedService>;
  let calc: CalcService;
  shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService, {
        provide: SharedService, useValue: shared
      }]
    });
    // shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService)
  })
  it('Should return the multiplied value of the two numbers passed in the parameter', () => {
    const result = calc.multiplication(3, 4);
    expect(result).toBe(12);
  }), 
  it('Should return 1 if no values are added in the parameter', () => {
    const result = calc.multiplication();
    expect(result).toBe(1);
  }),
  it('Should throw an error if we pass anything except a whole number', () => {
    expect(() => calc.multiplication(1.3)).toThrowError("Both parameters need to be a whole number");
    expect(() => calc.multiplication(1.3,2.7)).toThrowError("Both parameters need to be a whole number");
    expect(() => calc.multiplication('1')).toThrowError("Both parameters need to be a whole number");
    expect(() => calc.multiplication(() => {})).toThrowError("Both parameters need to be a whole number");
    expect(() => calc.multiplication(1, 10.5)).toThrowError("Both parameters need to be a whole number");
  }),
  it('Should return the value itself if there is only one variable passed', () => {
    const result = calc.multiplication(22);
    expect(result).toBe(22);
  })
  it('Should execute the function mySharedFunction from the service', () => {
    calc.multiplication()
    expect(shared.mySharedFunction).toHaveBeenCalled();
  })
})