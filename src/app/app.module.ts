import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeDashboardComponent } from './practice-dashboard/practice-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveGameComponent } from './live-game/live-game.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    PracticeDashboardComponent,
    DashboardComponent,
    WelcomePageComponent,
    HistoryPageComponent,
    NavbarComponent,
    LiveGameComponent,
    ChatInboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
