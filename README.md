# :zap: Angular Ngrx Tutorial

* App that allows users to submit the name and url of a tutorial using a simple form and also to remove a tutorial, by using [ngrx/store](https://ngrx.io/), RxJS-powered state management.
* Tutorial code from Gary Simon at [Coursetro](https://www.coursetro.com) - see [:clap: Inspiration](#clap-inspiration) below
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-ngrx-tutorial?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-ngrx-tutorial?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-ngrx-tutorial?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-ngrx-tutorial?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular ngRx Tutorial](#zap-angular-ngrx-tutorial)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* This app uses Ngrx Store, a RxJS-powered state management solution, to organise the app`s state. Ngrx was built for Angular.

## :camera: Screenshots

![Example screenshot](./img/write-and-read-components.png).

## :signal_strength: Technologies

* [Angular v11](https://angular.io/)
* [Angular CLI v11](https://cli.angular.io/).
* [RxJS Library v6](https://angular.io/guide/rx-library) used to handle datastreams and propagation of change using observables.
* [ngrx/store v10](https://ngrx.io/guide/store)
* [Angular Augury Chrome Extension](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd) v1.23.0 used for debugging.

## :floppy_disk: Setup

* Run `ng serve` for a dev server.
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## :computer: Code Examples

* _tutorial.reducer.ts_ file

```typescript
import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload]; // use spread operator to add action.payload to the array

      case TutorialActions.REMOVE_TUTORIAL:
        state.splice(action.payload, 1); // use splice to remove 1 item
        return state;

      default:
        return state;
  }
}
```

## :cool: Features

* adds titles of courses and weblinks to a list array using ngrx for state management.

## :clipboard: Status & To-Do List

* Status: Working. Updated may 2021
* To-Do: Nothing

## :clap: Inspiration

* [Gary Simon tutorial: Ngrx Store Tutorial for Angular - Learn State Management for Angular](https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management).
* [article by Richard Oliver Bray](https://medium.com/@richbray): [A Beginner’s Guide to Ngrx/store](https://medium.com/stratajet-tech/a-beginners-guide-to-ngrx-store-bc2184d6d7f0).

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
