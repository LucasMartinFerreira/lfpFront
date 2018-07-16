import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { MainTeamsComponent } from './main-teams/main-teams.component';
import {TeamsService} from "../../services/teams/teams.service";
import {PlayersService} from "../../services/players/players.service";
import {Team} from "../../models/teams/team";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Team],
  declarations: [ListTeamsComponent, MainTeamsComponent]
})
export class TeamsModule { }
