import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AF} from "./providers/db";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentDetailComponent } from './tournaments/tournament-detail/tournament-detail.component';
import { TournamentFormComponent } from './tournaments/tournament-form/tournament-form.component';
export const firebaseConfig = {
    apiKey: "AIzaSyBSxsSnTSgo_NkWdSxzWxASplCh3GhClHg",
    authDomain: "lacanchita-55caa.firebaseapp.com",
    databaseURL: "https://lacanchita-55caa.firebaseio.com",
    projectId: "lacanchita-55caa",
    storageBucket: "lacanchita-55caa.appspot.com",
    messagingSenderId: "187709839691"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    TournamentsComponent,
    TournamentDetailComponent,
    TournamentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
