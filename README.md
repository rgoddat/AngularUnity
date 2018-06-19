# UnityIntegration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.  

This repo packages the source for an Angular library aiming to include a Unity WebGL build into any Angular app.  

The sources for the library are located in `projects/unity-angular`

##Library build
Run `ng build unity-angular` to build the library. Then copy the `projects/unity-angular/src/assets` folder inside the `dist/unity-angular/esm5` folder and the `dist\unity-angular\esm2015` folder.  
Move to the dist/unity-angular package and run `npm pack` to build a npm package.

## Using the Library  
Run `npm install <path-to-lib-npm package>` to install the library in your project.  
Add `<script src="../../assets/Unity/UnityLoader.js"></script>  
<script src="../../assets/Unity/TemplateData/UnityProgress.js"></script>`  
to your index.html inside the `<head></head>`    
Add the Build folder of your Unity WebGL build inside the assets folder (or wherever you want).  

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
