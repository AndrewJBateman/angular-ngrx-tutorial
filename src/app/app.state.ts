import { Tutorial } from './models/tutorial.model';

// define an app state
export interface AppState {
  readonly tutorial: Tutorial[];
}
