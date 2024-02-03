import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './pages/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './pages/photos/photos.component';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { ListaAlbumesComponent } from './pages/lista-albumes/lista-albumes.component';
import { AgregarAlbumComponent } from './pages/agregar-album/agregar-album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    PostsComponent,
    PhotosComponent,
    AltaClienteComponent,
    ListaClientesComponent,
    ListaAlbumesComponent,
    AgregarAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //lo agregamos nosotros
    HttpClientModule //se añade modulo de HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
