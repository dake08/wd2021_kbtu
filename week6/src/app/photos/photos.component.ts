import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ALBUMS} from '../fake-db';
import {AlbumsService} from '../albums.service';
import {AlbumDetailsComponent} from '../album-details/album-details.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
  }


  ngOnInit(): void {
  }

}
