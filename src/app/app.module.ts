import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnityAngularModule } from 'unity-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UnityAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
