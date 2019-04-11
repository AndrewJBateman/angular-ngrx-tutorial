# Angular ngRx Tutorial

App that allows users to submit the name and url of a tutorial using a simple form and also to remove a tutorial, by using [Ngrx/store](https://ngrx.io/), RxJS-powered state management.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

This app uses Ngrx Store, a RxJS-powered state management solution, to organise organise the app`s state. Ngrx was built for Angular.

## Screenshots

![Example screenshot](./img/write-and-read-components.png).

## Technologies

* [Angular v7.2.12](https://angular.io/) & [Angular CLI v7.3.8](https://cli.angular.io/).

* [RxJS Library v6.3.3](https://angular.io/guide/rx-library) used to handle datastreams and propagation of change using observables.

* [Angular Augury Chrome Extension](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd) v1.23.0 used for debugging.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* _tutorial.reducer.ts_ file

```typescript
import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

// Section 1: define an initial or default state
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

/* Section 2: This is our actual reducer. It takes in a state, defined as a Tutorial type
and optionally bound to initialState.
It also takes in the action from our /actions/tutorial.actions file. */
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

/* Section 3: Use a switch to determine the type of action. In the case of adding a tutorial,
  we return the new state with the help of our newState() function. We're simply passing in the
  previous state in the first parameter, and then our action in the second.
  In the event that the action.type does not match any cases, it will simply return
  the state, as provided in the first parameter of our reducer */
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload]; // use spread operator to add action.payload to the array (called state)

      case TutorialActions.REMOVE_TUTORIAL:
        state.splice(action.payload, 1); // use splice to remove 1 item
        return state;

      default:
        return state;
  }
}
```

## Features

* adds titles of courses and weblinks to a list array using ngrx for state management.  

## Status & To-Do List

* Status: simple working app.

* To-Do: add a delete button to the right of each item in the component read list. Improve the list to use Angular Forms better.

## Inspiration

* [Gary Simon tutorial: Ngrx Store Tutorial for Angular - Learn State Management for Angular](https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management).

* [article by Richard Oliver Bray](https://medium.com/@richbray): [A Beginner’s Guide to Ngrx/store](https://medium.com/stratajet-tech/a-beginners-guide-to-ngrx-store-bc2184d6d7f0).

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
