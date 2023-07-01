import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';

@Component({
  selector: 'app-crear-tarjetas',
  templateUrl: './crear-tarjetas.component.html',
  styleUrls: ['./crear-tarjetas.component.css']
})


export class CrearTarjetasComponent implements OnInit{
 form: FormGroup;
  

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titular: ['',Validators.required],
      NumeroTarjeta: ['',[Validators.required, Validators.minLength(16),Validators.maxLength(16)]],
      cvv: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(3)]],
      FechaExpiracion: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(5)]],
    })
  }

    ngOnInit(): void {

    }
    CrearTarjeta(){
     const TARJETA: TarjetaCredito = {
      titular: this.form.value.titular,
      NumeroTarjeta: this.form.value.NumeroTarjeta,
      cvv: this.form.value.cvv,
      fechaExpiracion: this.form.value.fechaExpiracion,
      fechaCreacion: this.form.value.fechaCreacion,
      fechaActualizacion: this.form.value.fechaActualizacion
     }
    }
}