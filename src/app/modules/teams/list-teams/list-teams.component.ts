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

  public dataTeams: any = [];

  private withOutName : string = "Sin nombre de equipo"
  private withOutStadium : string ="Sin estadio"
  private withOutCoach : string = "Sin entrenador"
  private withOutPresident :string = "Sin presidente"
  private withOutShield: string = '';


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
      this.configureData(result.data);
    })
  }

  public goToViewPlayers(team){
    this.modelTeam.setTeam(team)
    this.router.navigate(['/players',team]);
  }

  /**
   * @description Preparamos la configuración del array para pintar aunque no vengan datos
   * @param data
   */
  configureData(data){

    let array=[];


    console.log('Datos de los equipos', data)
    for(let i=0; i<data.length; i++){

      let objectTeam = {
        "_id":data[i]._id,
        "name":'',
        "stadium":'',
        "coach":"",
        "president":"",
        "shield":"",
        "history":{
          "titles":"",
          "goals":""
        }
      };

      if(data[i].name!==undefined && data[i].name!=="" && data[i].name!==null){
        objectTeam.name = data[i].name;
      }else{
        objectTeam.name = this.withOutName;
      }

      if(data[i].stadium!==undefined && data[i].stadium!=="" && data[i].stadium!==null){
        objectTeam.stadium = data[i].stadium;
      }else{
        objectTeam.stadium = this.withOutStadium;
      }

      if(data[i].coach!==undefined && data[i].coach!=="" && data[i].coach!==null){
        objectTeam.coach = data[i].coach;
      }else{
        objectTeam.coach = this.withOutCoach;
      }

      if(data[i].president!==undefined && data[i].president!=="" && data[i].president!==null){
        objectTeam.president = data[i].president;
      }else{
        objectTeam.president = this.withOutPresident;
      }

      if(data[i].shield!==undefined && data[i].shield!=="" && data[i].shield!==null){
        objectTeam.shield = data[i].shield;
      }else{
        objectTeam.shield = this.withOutShield;
      }

      if(data[i].history!==undefined && data[i].history!=="" && data[i].history!==null){

        if(data[i].history.goals!==undefined && data[i].history.goals!=="" && data[i].history.goals!==null){
          objectTeam.history.goals = data[i].history.goals
        }else{
          objectTeam.history.goals = '';
        }

        if(data[i].history.titles!==undefined && data[i].history.titles!=="" && data[i].history.titles!==null){
          objectTeam.history.titles = data[i].history.titles
        }else{
          objectTeam.history.titles = '';
        }


      }else{
        objectTeam.shield = this.withOutShield;
      }

      array.push(objectTeam);
    }

    this.dataTeams = array;

    this.spinner.hide();
  }
}
