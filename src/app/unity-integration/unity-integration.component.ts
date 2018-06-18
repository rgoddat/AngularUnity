 /**
 * Copyright ©2018
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * The Software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders X be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the Software.
 * Except as contained in this notice, the name of the author shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization from the author.
 *
 * Author: Goddat, Réal <rgoddat@gmail.com>
 * Date: 06/04/2018 - 16:45:00
 *
 * File name: unity-integration.component.ts
 *
 * Description: Unity App integration component
 */
import { Component, OnInit, Input } from '@angular/core';
import '../../assets/Unity/UnityLoader.js';
import '../../assets/Unity/TemplateData/UnityProgress.js';

declare var UnityLoader : any;
declare var UnityProgress : any;


@Component({
  selector: 'app-unity-integration',
  templateUrl: './unity-integration.component.html',
  styleUrls: ['./unity-integration.component.css']
})
export class UnityIntegrationComponent implements OnInit {

  gameInstance : any;
  @Input() appLocation: String;
  @Input() appWidth: String;
  @Input() appHeight: String;

  constructor() { }

  ngOnInit() {
    console.log(UnityLoader);
    console.log(this.appLocation);
     this.gameInstance = UnityLoader.instantiate("gameContainer", this.appLocation, {onProgress: UnityProgress});
  }

}
