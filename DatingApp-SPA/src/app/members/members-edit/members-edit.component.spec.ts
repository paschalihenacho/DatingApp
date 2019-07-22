/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MembersEditComponent } from './members-edit.component';

describe('MembersEditComponent', () => {
  let component: MembersEditComponent;
  let fixture: ComponentFixture<MembersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
