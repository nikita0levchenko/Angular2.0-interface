import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './view.components/about.component';
import { HomeComponent } from './view.components/home.component';
import { TeamsComponent } from './view.components/teams.component';
import { TournamentsComponent } from './view.components/tournaments.component';
import { NotFoundComponent } from './view.components/not-found.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'tournaments', component: TournamentsComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TeamsComponent,
    TournamentsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
