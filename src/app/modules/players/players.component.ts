import {Component, Input, OnInit} from '@angular/core';
import {PlayersService} from "../../services/players/players.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute} from "@angular/router";
import {Team} from "../../models/teams/team";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  dataPlayers : any = [];

  teamFilter: string;

  filterargs:any;


  constructor(private playersService : PlayersService, private modelTeam: Team, public spinner: NgxSpinnerService, public router: ActivatedRoute) {


  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.teamFilter = params.equipo
      this.spinner.show();
      this.getAllPlayers();
    });


  }


  private getAllPlayers(){

    this.playersService.getPlayers().subscribe(result =>{
      this.dataPlayers = result.data;

      console.log('Jugadores', result.data)
      let array =[];
      let object ={}

      let nameTeam = [];

      for(let i =0 ; i<result.data.length; i++){
        if(result.data[i].team === null){
          nameTeam = [
            {
              "name" :"Sin equipo",
              "_id": 0
            }
          ]
        }else{
          nameTeam = [{

              "name": result.data[i].team[0].name,
             "_id": result.data[i].team[0]._id
           }]

        }

        object ={
          "name": result.data[i].name,
          "nationality": result.data[i].nationality,
          "photo": result.data[i].photo,
          "position": result.data[i].position,
          "secondname": result.data[i].secondname,
          "team": nameTeam,
          "_id":result.data[i]._id,
          "characteristics":{
            "age" : result.data[i].characteristics.age,
            "height" : result.data[i].characteristics.height,
            "weight" : result.data[i].characteristics.weight
          }
        }

        array.push(object);
      }

      console.log('Jugadores...',array)

      this.dataPlayers = array;

      if(this.teamFilter ==='AllTeams'){
        this.showPlayersForTeam(0);
      }else{
        this.showPlayersForTeam(this.teamFilter);
      }
      this.spinner.hide();
    })
  }

  showPlayersForTeam (team){
     this.filterargs = {'idEquipo' : team}
  }

}
