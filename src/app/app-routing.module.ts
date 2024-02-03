import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { AgregarAlbumComponent } from './pages/agregar-album/agregar-album.component';
import { ListaAlbumesComponent } from './pages/lista-albumes/lista-albumes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'fotos',
    component: PhotosComponent
  },
  {
    path: 'alta-cliente',
    component: AltaClienteComponent
  },
  {
    path: 'lista-clientes',
    component: ListaClientesComponent
  },
  {
    path: 'agregar-album',
    component: AgregarAlbumComponent
  },
  {
    path: 'lista-albumes',
    component: ListaAlbumesComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
