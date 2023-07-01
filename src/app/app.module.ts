import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CrearTarjetasComponent } from './components/crear-tarjetas/crear-tarjetas.component';
import { ListarTarjetasComponent } from './components/listar-tarjetas/listar-tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTarjetasComponent,
    ListarTarjetasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
