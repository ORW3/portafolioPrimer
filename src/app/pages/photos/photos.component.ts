import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {
  //propiedad para almacenar la data (posts)
  data:any[] = [];


  constructor(private dataService:DataService){}

  ngOnInit(): void {
      this.dataService.getPhotos().subscribe((photos:any[''])=>{
        this.data = photos;
      })
  }
}
