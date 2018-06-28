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
 * Date: 19/06/2018 - 10:45:00
 *
 * File name: unity-angular.component.ts
 *
 * Description: unity-angular component for loading a Unity WebGL build
 */

import { Component, OnInit, Input } from '@angular/core';
import '../assets/Unity/UnityLoader.js';
import '../assets/Unity/TemplateData/UnityProgress.js';

declare var UnityLoader : any;
declare var UnityProgress : any;

@Component({
  selector: 'lib-unity-angular',
  templateUrl: './unity-angular.component.template.html',
  styleUrls: []
})
export class UnityAngularComponent implements OnInit {

  gameInstance : any;
  @Input() appLocation: String;
  @Input() appWidth: String;
  @Input() appHeight: String;

  ngOnInit() {
    this.gameInstance = UnityLoader.instantiate("gameContainer", this.appLocation, {onProgress: UnityProgress});
  }

}
