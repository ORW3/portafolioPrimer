import { Component, OnInit } from '@angular/core';
import { GeneroAlbum } from '../../models/genero-album';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-agregar-album',
  templateUrl: './agregar-album.component.html',
  styleUrl: './agregar-album.component.css'
})
export class AgregarAlbumComponent implements OnInit{

  //propiedades
  album!:Album;
  generos:GeneroAlbum[] = [];

  //constructor
  constructor(private albumService:AlbumService){}

  ngOnInit(): void {
      this.album = this.albumService.nuevoAlbum();
      this.generos = this.albumService.getGeneros();
  }

  //método para insertar un cliente desde el formulario
  insertarAlbum(){
    this.albumService.agregarAlbum(this.album);
    this.album = this.albumService.nuevoAlbum();
  }

}
