import { Component, OnInit } from '@angular/core';
// import { CalcService } from './calc.service';
// import { DataService } from './data.service';
// import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  // isDisabled = false;
  // btnTitle = 'Subscibe';
  // constructor(private _dataService: DataService) {}
  data = ''
  ngOnInit(): void {
    //  setTimeout(() => {
    //   this._dataService.gettingAllData().subscribe(data => {
    //     console.log(data);
    //     this.isDisabled = true;
    //   })
    //  }, 2000)

  }

  submitValue() {
    console.log(this.data);
  }
}
