import { TestBed } from '@angular/core/testing';

import { AskStoriesService } from './ask-stories.service';

describe('AskStoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AskStoriesService = TestBed.get(AskStoriesService);
    expect(service).toBeTruthy();
  });
});
