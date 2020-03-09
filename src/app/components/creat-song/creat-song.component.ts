import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-creat-song',
  templateUrl: './creat-song.component.html',
  styleUrls: ['./creat-song.component.scss']
})
export class CreatSongComponent implements OnInit {
  formGroup: FormGroup;
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  constructor(private songService: SongService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      url: new FormControl(),
      image: new FormControl(),
    });
  }
  save() {
    this.isLoading = true;
    const song = this.formGroup.value;
    this.songService.createSong(song).subscribe( result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Thêm thành công!';
      this.isLoading = false;
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Thêm thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }

}
