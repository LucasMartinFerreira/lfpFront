import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TeamsService} from "../../services/teams/teams.service";

@Component({
  selector: 'app-teams-shields',
  templateUrl: './teams-shields.component.html',
  styleUrls: ['./teams-shields.component.scss']
})
export class TeamsShieldsComponent implements OnInit {


  public teams: any;
  // Usamos el decorador Output
  @Output() team = new EventEmitter();

  constructor(public teamsService: TeamsService) { }

  ngOnInit() {

    this.getAllTeams();
  }

  searchPlayerForTeam (team){
    this.team.next(team);
  }

  getAllTeams(){

    this.teamsService.getTeams().subscribe(dataTeams=>{
      console.log('Equipo', dataTeams.data);
      this.teams = dataTeams.data;
    })
  }

}
