import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductoLista } from "./producto-lista/producto-lista";

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
 
})
export class App {
  protected title = 'inventario-app';
}
