/**
 * Copyright ©2018 Goddat Réal, on behalf of Eaton
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * Author: Goddat, Réal <rgoddat@gmail.com>
 * Date: 06/04/2018 - 16:45:00
 *
 * File name: app.module.ts
 *
 * Description: Demonstration's module
 */
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
