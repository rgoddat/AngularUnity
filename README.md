# UnityIntegration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.  

This repo packages the source for an Angular library aiming to include a Unity WebGL build into any Angular app.  

The sources for the library are located in `projects/unity-angular`

## Library build
Run `ng build unity-angular` to build the library. Then copy the `projects/unity-angular/src/assets` folder inside the `dist/unity-angular/esm5` folder and the `dist\unity-angular\esm2015` folder.  
Move to the dist/unity-angular package and run `npm pack` to build a npm package.

## Using the Library  
Run `npm install <path-to-lib-npm package>` to install the library in your project.  
Add ```<script src="../../assets/Unity/UnityLoader.js"></script>  
<script src="../../assets/Unity/TemplateData/UnityProgress.js"></script>```  
to your index.html inside the `<head></head>`    
Add the Build folder of your Unity WebGL build inside the assets folder (or wherever you want).
The library `assets` folder mmight not been added in the project's assets on build. If it happens just copy the `projects/unity-angular/src/assets` folder inside the project and merge it with your assets.

In your layout file add the following line : `<lib-unity-angular appLocation="path/to/unity/build/.json" appWidth="desiredWidth" appHeight="desiredHeight"></lib-unity-angular>`  

In your app module don't forget to import the library's module : `import { UnityAngularModule } from 'unity-angular';`  
Also add it to the `@NgModule` imports : `imports: [
  ...,
  UnityAngularModule
],`



### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Licence



The MIT License (MIT)

Copyright (c) 2018 Goddat Réal, on behalf of Eaton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
