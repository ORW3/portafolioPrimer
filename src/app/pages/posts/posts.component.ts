import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  //propiedad para almacenar la data (posts)
  data:any[] = [];


  constructor(private dataService:DataService){}

  ngOnInit(): void {
      this.dataService.getPosts().subscribe((posts:any[''])=>{
        this.data = posts;
      })
  }
}
