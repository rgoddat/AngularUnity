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

  constructor() { }

  ngOnInit() {
    console.log(UnityLoader);
    console.log(UnityProgress);
    console.log(this.appLocation);
    this.gameInstance = UnityLoader.instantiate("gameContainer", this.appLocation, {onProgress: UnityProgress});
    console.log("instance");
  }

}
