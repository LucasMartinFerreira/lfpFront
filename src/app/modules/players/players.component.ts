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

  private withOutNameTeam: string = "Sin Equipo";
  private withOutNamePlayer: string = "Sin Nombre";
  private withOutNameMationality: string = "Sin Nacionalidad";
  private withOutPhoto: string = "../../../assets/images/sinJugador.png";
  private withOutPosition: string = "Sin Demarcación";
  private withOutSecondname: string = "";

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
      //this.dataPlayers = result.data;

      this.prepareObject(result);

      if(this.teamFilter ==='AllTeams'){
        this.showPlayersForTeam(0);
      }else{
        this.showPlayersForTeam(this.teamFilter);
      }
      this.spinner.hide();
    })
  }

  /**
   *
   * @param team
   */
  showPlayersForTeam (team){
     this.filterargs = {'idEquipo' : team}
  }

  /**
   *
   * @param result
   */
  prepareObject(result){
    console.log('Jugadores', result.data)
    let array =[];

    let nameTeam = [];

    for(let i =0 ; i<result.data.length; i++){

      let object = {
        "name": '',
        "nationality": '',
        "photo": '',
        "position": '',
        "secondname": '',
        "team": [],
        "_id":result.data[i]._id,
        "characteristics":{
          "age" : '',
          "height" : '',
          "weight" :''
        }
      }


      if(result.data[i].team!==undefined && result.data[i].team!=="" && result.data[i].team!==null){
        nameTeam = [
          {
            "name" : result.data[i].team.name,
            "_id": result.data[i].team._id
          }
        ]
      }else{
        nameTeam = [
              {
                "name" : this.withOutNameTeam,
                "_id": 0
              }
        ]
      }
      object.team =nameTeam;

      if(result.data[i].name!==undefined && result.data[i].name!=="" && result.data[i].name!==null){
        object.name = result.data[i].name;
      }else{
        object.name = this.withOutNamePlayer;
      }

      if(result.data[i].nationality!==undefined && result.data[i].nationality!=="" && result.data[i].nationality!==null){
        object.nationality = result.data[i].nationality;
      }else{
        object.nationality = this.withOutNameMationality;
      }


      if(result.data[i].photo!==undefined && result.data[i].photo!=="" && result.data[i].photo!==null){
        object.photo = result.data[i].photo;
      }else{
        object.photo = this.withOutPhoto;
      }


      if(result.data[i].position!==undefined && result.data[i].position!=="" && result.data[i].position!==null){
        object.position = result.data[i].position;
      }else{
        object.position = this.withOutPosition;
      }


      if(result.data[i].secondname!==undefined && result.data[i].secondname!=="" && result.data[i].secondname!==null){
        object.secondname = result.data[i].secondname;
      }else{
        object.secondname = this.withOutSecondname;
      }


      if(result.data[i].characteristics!==undefined && result.data[i].characteristics!=="" && result.data[i].characteristics!==null){

        if(result.data[i].characteristics.age!==undefined && result.data[i].characteristics.age!=="" && result.data[i].characteristics.age!==null){
          object.characteristics.age =result.data[i].characteristics.age;
        }else{
          object.characteristics.age = "";
        }

        if(result.data[i].characteristics.height!==undefined && result.data[i].characteristics.height!=="" && result.data[i].characteristics.height!==null){
          object.characteristics.height =result.data[i].characteristics.height;
        }else{
          object.characteristics.height = "";
        }

        if(result.data[i].characteristics.weight!==undefined && result.data[i].characteristics.weight!=="" && result.data[i].characteristics.weight!==null){
          object.characteristics.weight =result.data[i].characteristics.weight;
        }else{
          object.characteristics.weight = "";
        }

      }else{
        object.characteristics.age = "";
        object.characteristics.height = "";
        object.characteristics.weight = "";
      }

      array.push(object);
    }

    console.log('Jugadores...',array)

    this.dataPlayers = array;
  }

}
