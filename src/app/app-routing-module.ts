import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "listaproductos", component: ListaProductosComponent},
  { path: "padrecoches", component: PadreCochesComponent},
  { path: "deportes", component: PadreDeportesComponent },
  { path: "numeros", component: PadreNumerosComponent}, 
  { path: "comicssimple", component: ComicsSimpleComponent },
  { path: "comicsjson", component: ComicsJsonComponent},
  { path: "comicsexcel", component: ComicsExcelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
