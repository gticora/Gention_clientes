import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-resumen',
  standalone: true, // Asegúrate de que tu componente sea standalone
  imports: [CommonModule], // Incluye CommonModule aquí
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  cliente: any;

  constructor(public router: Router) {}

  ngOnInit() {
     // Recuperar los datos del cliente enviados desde el componente de ingreso
     this.cliente = history.state.cliente;

     if (!this.cliente) {
       // Si no hay datos, regresar al componente de ingreso
       this.router.navigate(['/ingreso']);
     }
  }

  volver() {
    this.router.navigate(['/']);
  }
}
