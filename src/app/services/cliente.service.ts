import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { TipoCliente } from '../models/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes:Cliente[] = [];
  private tipos:TipoCliente[] = [];

  constructor() { 
    this.clientes = [];

    this.tipos = [
      {
        id: 0,
        descripcion: 'Sin definir'
      },
      {
        id: 1,
        descripcion: 'Clientes Activos'
      },
      {
        id: 2,
        descripcion: 'Clientes Inactivos'
      },
      {
        id: 3,
        descripcion: 'Clientes Deudores'
      }
    ];
  }

  //método que retorne el arreglo de clientes
  getClientes(){
    return this.clientes;
  }

  //método que retorne los tipos de cliente
  getTipos(){
    return this.tipos;
  }

  //método que agregue un cliente al arreglo
  agregarCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }

  //método que inicializa un cliente nuevo
  nuevoCliente():Cliente {
    return{
      id: this.clientes.length + 1,
      nombre: '',
      rfc: '',
      domicilio: '',
      tipoCliente: 0
    };
  }
}
