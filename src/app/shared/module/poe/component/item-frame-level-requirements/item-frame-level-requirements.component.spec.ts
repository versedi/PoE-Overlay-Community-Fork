import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { Language } from '../../type';
import { ItemFrameLevelRequirementsComponent } from './item-frame-level-requirements.component';


describe('ItemFrameLevelRequirementsComponent', () => {
  let component: ItemFrameLevelRequirementsComponent;
  let fixture: ComponentFixture<ItemFrameLevelRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFrameLevelRequirementsComponent);
    component = fixture.componentInstance;
    component.item = {
      influences: {},
      damage: {},
      stats: [],
      properties: {},
      requirements: {},
      sockets: []
    };
    component.queryItem = component.item;
    component.language = Language.English;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
