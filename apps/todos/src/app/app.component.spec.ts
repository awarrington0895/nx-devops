import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodosComponent } from '@devops/ui';
import { MockComponent } from 'ng-mocks';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [HttpClientTestingModule],
    declarations: [MockComponent(TodosComponent)]
  });

  beforeEach(() => spectator = createComponent());

  it('should create the app', () => {
    expect(spectator)
      .toBeTruthy();
  });
});
