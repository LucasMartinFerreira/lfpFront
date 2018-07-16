import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../../../services/teams/teams.service";
import { NgxSpinnerService } from 'ngx-spinner';
import {Router, Routes} from "@angular/router";

import {Team} from "../../../models/teams/team";

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.scss']
})
export class ListTeamsComponent implements OnInit {

  public dataTeams: any;

  constructor(private teamsService: TeamsService,
              private spinner: NgxSpinnerService,
              private modelTeam: Team,
              public router: Router) { }

  ngOnInit() {
    this.spinner.show();
    this.getListTeams();
  }

  private getListTeams(){
    this.teamsService.getTeams().subscribe(result=>{
      this.spinner.hide();
      this.dataTeams = result.data;
    })
  }

  public goToViewPlayers(team){
    this.modelTeam.setTeam(team)
    this.router.navigate(['/players',team]);
  }

}
