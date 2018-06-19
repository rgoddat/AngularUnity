import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityAngularComponent } from './unity-angular.component';

describe('UnityAngularComponent', () => {
  let component: UnityAngularComponent;
  let fixture: ComponentFixture<UnityAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
