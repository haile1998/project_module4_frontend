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
  deleteSong(i) {
    const song = this.songList[i];
    this.songService.deleteSong(song.id).subscribe(() => {
      this.songList = this.songList.filter(t => t.id !== song.id);
      console.log(song.id);
    });
  }
}
