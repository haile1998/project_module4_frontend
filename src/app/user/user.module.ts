import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LiveComponent} from '../components/live/live.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SongService} from '../services/song.service';

const routes: Routes = [
  {
    path: '', component: LiveComponent
  }
  ];

@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SongService]
})
export class UserModule { }
