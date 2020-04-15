# AngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.
## General info about the project 

This project is the client side which consume WebApi service found <b><a href='https://github.com/bejaouibechir/WebApi'>here</a></b>
<br><br>
## Project Components

### Livre:
Get an instance of Livre instance which is (book in french)
### Livres:
Get a collection of Livre instances 
### Addlivre/UpdateLivre/Deletelivre:
Three other components which add update and delete a Livre instance respectively

### Visiteur:
Get an instance of Livre instance which is (book in french)
### Visiteurs:
Get a collection of Vsiteur instances 
### Addvisiteur/Updatevisiteur/Deletevisiteur:
Three other components which add update and delete a Vsisiteur instance respectively

### WebApiService:
It is a generic service that leverages CRUD opérations 
## LivreService:
It is derived from WebApiService
## VisiteurService:
It is derived from WebApiService also
## event emitter service:
This one is optional it will be might be used later on to let compoenents communicate eachother


# Additional info for the newbies with Angular
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
