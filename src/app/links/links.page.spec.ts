import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinksPage } from './links.page';

describe('LinksPage', () => {
  let component: LinksPage;
  let fixture: ComponentFixture<LinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
