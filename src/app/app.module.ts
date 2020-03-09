import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveComponent } from './components/live/live.component';
import { CreatSongComponent } from './component/creat-song/creat-song.component';
import { EditSongComponent } from './components/edit-song/edit-song.component';
import { ManagementSongComponent } from './components/management-song/management-song.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    CreatSongComponent,
    EditSongComponent,
    ManagementSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
