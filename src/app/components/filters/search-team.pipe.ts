import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../../models/players/player'


@Pipe({
  name: 'searchTeam',
  pure: false
})

export class SearchTeamPipe implements PipeTransform {

  transform(items: any[], filter: Player): any {
    if (!items || !filter) {
      return items;
    }else{

      let string = filter.idEquipo;
      if(string === 0){
        return items;
      }else{
        return items.filter(item =>  item.team[0]._id.indexOf(string) !== -1);
      }

    }

  }


  callback(){

  }

}
