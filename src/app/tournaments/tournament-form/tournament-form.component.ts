import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { TournamentService } from '../shared/tournament.Service';
import { Tournament } from '../shared/Tournament';
@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.css']
})
export class TournamentFormComponent implements OnInit {
  
  tournament: Tournament = new Tournament();

  constructor(private itemSvc: TournamentService) { }

  createTournament() {
    this.itemSvc.createItem(this.tournament)
    this.tournament = new Tournament() // reset item
  }
  
  ngOnInit() {
  }
}
