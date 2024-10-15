import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { HomeComponent } from "./home.component"
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      fixture.detectChanges();
    })
  }))

  it('Should create a component instance', () => {
    expect(component).toBeTruthy();
  })

  it('Should have correct contents', () => {
    let pElement = el.queryAll(By.css('p'));
    expect(pElement[0].nativeElement.textContent).toBe('home works!')

    let buttonElement = el.queryAll(By.css('.btn'));
    expect(buttonElement[0].nativeElement.disabled).toBeTruthy()

    component.title = 'Coming from unit test';
    fixture.detectChanges();
    let titleElement = el.queryAll(By.css('.title'));
    expect(titleElement[0].nativeElement.textContent).toBe(' Coming from unit test ')
  })
})