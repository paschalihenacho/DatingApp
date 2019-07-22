import { Injectable } from '@angular/core';
import { MembersEditComponent } from '../members/members-edit/members-edit.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MembersEditComponent> {
    canDeactivate(component: MembersEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost')
        }
        return true;
    }
}