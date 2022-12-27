import { TestBed } from '@angular/core/testing';

import { TodoCRUDService } from './todo-crud.service';

describe('TodoCRUDService', () => {
  let service: TodoCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
