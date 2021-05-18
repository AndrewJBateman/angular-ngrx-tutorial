import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Tutorial } from "./../models/tutorial.model";
import { AppState } from "./../app.state";
import * as TutorialActions from "./../actions/tutorial.actions";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"],
})
export class ReadComponent implements OnInit {
  // Section 1: define an observable named tutorials which we will later display in the template.
  tutorials: Observable<Tutorial[]>;

  /*   Section 2: access the store from ngrx within the constructor, and then selecting tutorial
  which is defined as a property from app.module.ts in StoreModule.forRoot({}).
  This calls the tutorial reducer and returns the tutorial state. */
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select("tutorial");
  }
  // This will call our RemoveTutorial action and pass in the index.
  delTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit() {}
}
