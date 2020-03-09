import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-management-song',
  templateUrl: './management-song.component.html',
  styleUrls: ['./management-song.component.scss']
})
export class ManagementSongComponent implements OnInit {
  songList: any[];
  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getList().subscribe( result => {
    this.songList = result.data;
  });
  }

}
