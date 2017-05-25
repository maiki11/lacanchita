import { Component, OnInit } from '@angular/core';
import {AF} from "../providers/db";
import {Router} from "@angular/router";
import { TournamentService } from '../tournaments/shared/tournament.Service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [TournamentService]
})
export class HomePageComponent implements OnInit {
  tournaments: FirebaseListObservable<any[]>;
  msgVal: string = '';
  constructor(public afService: AF, private router: Router) {
      this.tournaments = afService.db.list('/tournaments', {
      query: {
        limitToLast: 50
      }
    });

  }

  ngOnInit() {
  }
  Click(id: String) {
    console.log(id)
  }

  Send(desc: string) {
    this.tournaments.push({ name: desc});
    this.msgVal = '';
  }

}
