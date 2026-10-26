import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  public suma:number;
  public arrayNumeros: Array<number>;

  constructor() {
    this.suma = 0;
    this.arrayNumeros = [8,5,6]
  }

  sumarNumerosParent(numeroRecibido: number): void {
    this.suma += numeroRecibido;
  }

  generarNumero(): void {
    let random = Math.floor((Math.random() * 100) + 1);
    this.arrayNumeros.push(random);
  }

}
