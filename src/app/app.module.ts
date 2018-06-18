import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UnityIntegrationComponent } from './unity-integration/unity-integration.component';


@NgModule({
  declarations: [
    AppComponent,
    UnityIntegrationComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    UnityIntegrationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
