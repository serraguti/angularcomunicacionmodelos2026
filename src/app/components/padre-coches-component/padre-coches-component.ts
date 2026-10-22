import { Component } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public arrayCoches: Array<Coche>;
  constructor() {
    this.arrayCoches = [
      new Coche("Ford", "Mustang", 0, 50),
      new Coche("Volkswagen", "Escarabajo", 0, 10),
      new Coche("Lamborghini", "Diablo", 0, 75)
    ]
  }
}
