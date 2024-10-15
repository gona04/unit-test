import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [DataService]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
      el = fixture.debugElement;
    })
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  // it('Should render a button with text subscribe', () => {
  //   fixture.detectChanges();
  //   let btnEl = el.queryAll(By.css('button'));
  //   btnEl[0].nativeElement.click();
  //   fixture.detectChanges();
  //   console.log(btnEl);
  //   //This creates a new instance of the new ngIf button
  //   btnEl = el.queryAll(By.css('button'));
  //   // expect(btnEl[0].nativeElement.textContent).toBe('Subscibe');
  //   expect(btnEl[0].nativeElement.disabled).toBeTrue();
  // })
  it('Should dynamically change the value of input when submit is clicked', () => {
    let inputEle = el.queryAll(By.css('input'));
    let submitEle = el.queryAll(By.css('button'));
    inputEle[0].nativeElement.value = 'Testing';
    inputEle[0].nativeElement.dispatchEvent(new Event('input'));
    submitEle[0].nativeElement.click();
    fixture.detectChanges();
    console.dir(inputEle[0].nativeElement.value, app.data);
  })

});
