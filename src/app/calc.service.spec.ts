import { TestBed } from "@angular/core/testing"
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";

xdescribe('CalcService', () => {
  let calc: any;
  let shared: any;
  beforeEach(() => {
    shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({ providers: [CalcService, { provide: SharedService, useValue: shared }] })
    calc = TestBed.inject(CalcService)
  })
  it('Should multiply the two parameters given', () => {
    const result = calc.multiplication(20, 5);
    expect(result).toBe(100);
  }),
  it('Should execute the mySharedFunction from the Shared services', () => {
    calc.multiplication()
    expect(shared.mySharedFunction).toHaveBeenCalled();
  })
})