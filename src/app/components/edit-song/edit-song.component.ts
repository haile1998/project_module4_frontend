import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  song: any;
  id;
  formGroup = new FormGroup({
    productName: new FormControl(),
    productImage: new FormControl(),
    productPrice: new FormControl(),
    productDescription: new FormControl(),
  });
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  constructor(private songService: SongService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        console.log(params);
        const idSearch = params.get('id');
        this.songService.getById(idSearch).subscribe(song => {
          this.song = song;
          this.id = idSearch;
          this.formGroup.controls.productName.setValue(this.song.name);
          this.formGroup.controls.productImage.setValue(this.song.description);
        });
      }
    );
  }
  onSubmit() {
    const id = this.id;
    const name = this.formGroup.get('songName').value;
    const description = this.formGroup.get('songDescription').value;
    const url = this.formGroup.get('songUrl').value;
    const image = this.formGroup.get('songImage').value;
    this.songService.editSong(name, image, url, description, id).subscribe(result => { // status: 200
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Sửa thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Sửa thất bại!';
      this.formGroup.reset();
    });
  }
}
