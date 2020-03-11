import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  songList: any[];
  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getList().subscribe( result => {
      this.songList = result.data;
    });
  }
}
