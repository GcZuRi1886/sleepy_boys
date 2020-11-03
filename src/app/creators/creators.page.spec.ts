import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatorsPage } from './creators.page';

describe('CreatorsPage', () => {
  let component: CreatorsPage;
  let fixture: ComponentFixture<CreatorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
