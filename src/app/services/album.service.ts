import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { GeneroAlbum } from '../models/genero-album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumes:Album[] = [];
  private generos:GeneroAlbum[] = [];

  constructor() { 
    this.albumes = []

    this.generos = [
      {
        id: 0,
        descripcion: 'Sin definir'
      },
      {
        id: 1,
        descripcion: 'Música clásica'
      },
      {
        id: 2,
        descripcion: 'Jazz'
      },
      {
        id: 3,
        descripcion: 'Blues'
      },
      {
        id: 4,
        descripcion: 'Salsa'
      },
      {
        id: 5,
        descripcion: 'Flamenco'
      },
      {
        id: 6,
        descripcion: 'Pop'
      },
      {
        id: 7,
        descripcion: 'Rock'
      },
      {
        id: 8,
        descripcion: 'Metal'
      }
    ];
  }

  getAlbumes() {
    return this.albumes;
  }

  getGeneros() {
    return this.generos;
  }

  agregarAlbum(album: Album) {
    this.albumes.push(album);
  }

  nuevoAlbum():Album {
    return{
      id: this.albumes.length + 1,
      nombre: '',
      urlImagen: '',
      generoAlbum: 0
    };
  }
}
