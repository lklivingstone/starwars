import { TestBed } from '@angular/core/testing';

import { CacheInterceptor } from './cache.interceptor';
import { CacheService } from '../../service/cache-service/cache.service';

describe('CacheInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CacheInterceptor,
      CacheService
      ]
  }));

  it('should be created', () => {
    const interceptor: CacheInterceptor = TestBed.inject(CacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});