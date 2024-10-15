import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private shared: SharedService) { }
  

 
  multiplication(a:any = 1, b:any = 1) {
    this.shared.mySharedFunction();
      if (Number.isInteger(a) && Number.isInteger(b)) {
        return a * b;
      }
      throw new Error("Both parameters need to be a whole number");
    }

  add(a: number, b: number) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a + b;
    }
    throw new Error("Both parameters need to be a whole number");
  }
}
