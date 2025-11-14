import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css'],
})
export class DiarioComponent implements OnInit {
  entradaHoy: string = '';
  listaEntradas: { dia: number; texto: string }[] = [];

  ngOnInit() {
  const data = localStorage.getItem('entradas');

  this.listaEntradas = data ? JSON.parse(data) : [];
}

guardar() {
  if (!this.entradaHoy.trim()) return;

   const hoy = new Date();
  const dia = hoy.getDate();

  const nuevaEntrada = {
    dia,
    texto: this.entradaHoy
  };

  this.listaEntradas.push(nuevaEntrada);

  // Guardar lista completa en localStorage
  localStorage.setItem('entradas', JSON.stringify(this.listaEntradas));

  this.entradaHoy = ''; // limpiar textarea
}
}
