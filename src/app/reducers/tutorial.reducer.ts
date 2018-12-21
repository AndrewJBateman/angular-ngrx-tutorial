import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

// Section 1: define an initial or default state
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// Section 2: This is our actual reducer. It takes in a state, defined as a Tutorial type and optionally bound to initialState. It also takes in the action from our /actions/tutorial.actions file.
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3: Use a switch to determine the type of action. In the case of adding a tutorial, we return the new state with the help of our newState() function. We're simply passing in the previous state in the first parameter, and then our action in the second.
//In the event that the action.type does not match any cases, it will simply return the state, as provided in the first parameter of our reducer
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];//use spread operator to add action.payload to the array (called state)

        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);//use splice to remove 1 item
            return state;

        default:
            return state;
    }
}