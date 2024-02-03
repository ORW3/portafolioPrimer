import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-lista-albumes',
  templateUrl: './lista-albumes.component.html',
  styleUrl: './lista-albumes.component.css'
})
export class ListaAlbumesComponent implements OnInit{

  //propiedades
  albumes: Album[] = [];

  //constructor
  constructor(private albumService:AlbumService){}

  ngOnInit(): void {
    this.albumes = this.albumService.getAlbumes();    
  }
}
