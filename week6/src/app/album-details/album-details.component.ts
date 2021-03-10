// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ALBUMS} from '../fake-db';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album!: Album;
  loaded: boolean;
  photos: Photo[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
    this.photos = [];
  }


  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.post = POSTS.find((x) => x.id === id);
    // this.route.paramMap.subscribe((params) => {
    //   const id = +params.get('id');
    //   this.album = ALBUMS.find((x) => x.id === id);
    // });
    this.getAlbum();
  }

  // tslint:disable-next-line:typedef
  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  // tslint:disable-next-line:typedef
  updateAlbum(){
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      this.loaded = true;
    });
  }


  // tslint:disable-next-line:typedef
  showPhotos(){
    this.albumsService.getAlbumPhotos(this.album.id).subscribe((photos) => {
        this.photos = photos;
      });
  }

  // tslint:disable-next-line:typedef
  goBack(){
    this.location.back();
  }

}
