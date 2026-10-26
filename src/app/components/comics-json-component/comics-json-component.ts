import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  public arrayComics: Array<Comic>;
  
  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }

  cargarComics(): void {
    //estamos en public
    let path = "./assets/comics.json";
    fetch(path).then(response => response.json())
    .then((data: any[]) => {
      //recorremos todo el array de comics JSON
      for (let elem of data){
        //creamos un Comic de Angular
        let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        this.arrayComics.push(comic);
      }
      this._cdr.detectChanges();
    })
  }
}
