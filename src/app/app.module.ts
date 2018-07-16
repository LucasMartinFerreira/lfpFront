import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MainPageComponent } from './modules/main-page/main-page.component';

import { PlayersComponent } from './modules/players/players.component';

import { PlayersService } from './services/players/players.service'

/** Router **/
import { app_routing } from './services/router';
import { TeamsShieldsComponent } from './components/teams-shields/teams-shields.component';
import { SearchTeamPipe } from './components/filters/search-team.pipe';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {TeamsModule} from "./modules/teams/teams.module";
import {TeamsService} from "./services/teams/teams.service";
import { NgxSpinnerModule } from 'ngx-spinner';
import {MainTeamsComponent} from "./modules/teams/main-teams/main-teams.component";
import {NewsService} from "./services/news/news.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MainPageComponent,
    PlayersComponent,
    TeamsShieldsComponent,
    SearchTeamPipe,

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    app_routing,
    TeamsModule,
    NgxSpinnerModule

  ],

  providers: [PlayersService, TeamsService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
