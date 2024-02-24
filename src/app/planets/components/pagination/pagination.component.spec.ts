import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from './pagination.component';
import { PaginationService } from '../../../service/pagination/pagination.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let paginationService: PaginationService;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    const paginationServiceStub = {
      setSelectedCurrentPage: jasmine.createSpy('setSelectedCurrentPage')
    };

    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: PaginationService, useValue: paginationServiceStub },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
            snapshot: { paramMap: { get: () => '1' } }
          }
        },
      ]
    });

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    paginationService = TestBed.inject(PaginationService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);

    spyOn(router, 'navigate');

    fixture.detectChanges();
  });

  it('should update the route when onSelectPage is called', fakeAsync(() => {
    component.onSelectPage(2);
    tick();

    expect(router.navigate).toHaveBeenCalledWith([], {
      queryParams: { page: 2 }
    });
  }));
});
