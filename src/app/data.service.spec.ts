import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { DataService } from "./data.service";
import { TestBed } from "@angular/core/testing";
import { urls } from "./mock-data/urls";

describe('DataService', () => {
  let http: HttpTestingController;
  let _dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    })
    http = TestBed.inject(HttpTestingController);
    _dataService = TestBed.inject(DataService);
  });

  it('Should get correct data from backend', () => {
    _dataService.gettingAllData().subscribe((data: any) => {
      expect(data).toEqual(urls)
    })
    const req = http.expectOne(_dataService.BASE_URL);
    expect(req.request.method).toBe('GET');
    req.flush(urls);
  })
})