import { Component, OnInit, Input } from '@angular/core';

import { TournamentService } from '../shared/tournament.Service';
import { Tournament } from '../shared/Tournament';
@Component({
  selector: 'tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.css']
})
export class TournamentDetailComponent implements OnInit {

  @Input() tournament: Tournament;

  constructor(private itemSvc: TournamentService) { }

  updateTimeStamp() {
    let date = new Date()
    this.itemSvc.updateItem(this.tournament.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    this.itemSvc.updateItem(this.tournament.$key, { active: value })
  }

  deleteItem() {
    this.itemSvc.deleteItem(this.tournament.$key)
  }
  ngOnInit() {
    
  }

}
