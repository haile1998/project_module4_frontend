import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SongService} from '../services/song.service';
import {RouterModule, Routes} from '@angular/router';
import {ManagementSongComponent} from '../components/management-song/management-song.component';
import {CreatSongComponent} from '../components/creat-song/creat-song.component';
import {EditSongComponent} from '../components/edit-song/edit-song.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'management', component: ManagementSongComponent
  },
  {
    path: 'management/add', component: CreatSongComponent
  },
  {
    path: 'management/edit/:id', component: EditSongComponent
  }
];

@NgModule({
  declarations: [CreatSongComponent,
    EditSongComponent,
    ManagementSongComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SongService]
})
export class AdminModule { }
