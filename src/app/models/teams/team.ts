import {EventEmitter} from "@angular/core";


export class Team {
  id: number;
  name: string;

  teamName = new EventEmitter();


  public setTeam(team:string){
    this.teamName.next(team)
  }

  public getTeam(){
    return this.teamName.asObservable();
  }
}
