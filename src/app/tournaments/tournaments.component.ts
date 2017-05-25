import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";
import { TournamentService } from './shared/tournament.Service';
@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {


  public tournaments: FirebaseListObservable<any[]>;

  constructor(private tournamentSvc: TournamentService) { }

  ngOnInit() {
    this.tournaments = this.tournamentSvc.getItemsList({limitToLast: 10})
  }

  deleteItems() {
    this.tournamentSvc.deleteAll()
  }

}
