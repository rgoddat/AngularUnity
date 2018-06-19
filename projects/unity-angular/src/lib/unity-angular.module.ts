import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnityAngularComponent } from './unity-angular.component';

@NgModule({
  imports: [ CommonModule
  ],
  declarations: [UnityAngularComponent],
  exports: [UnityAngularComponent]
})
export class UnityAngularModule { }
