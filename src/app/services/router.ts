import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "../modules/main-page/main-page.component";
import {PlayersComponent} from "../modules/players/players.component";
import {MainTeamsComponent} from "../modules/teams/main-teams/main-teams.component";


const router : Routes = <Routes>[
  {path: 'main', component: MainPageComponent},
  {path: 'teams', component: MainTeamsComponent},
  {path: 'players/:equipo', component: PlayersComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'main'}
];


export const app_routing = RouterModule.forRoot(router, {useHash:true})
