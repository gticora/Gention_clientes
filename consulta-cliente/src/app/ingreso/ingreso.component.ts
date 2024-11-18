import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-ingreso',
  standalone: true, // Declara este componente como standalone
  imports: [FormsModule], // Incluye FormsModule como dependencia
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  botonHabilitado: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  validarCampos() {
    this.botonHabilitado =
      this.tipoDocumento !== '' &&
      this.numeroDocumento.length >= 8 &&
      this.numeroDocumento.length <= 11;
  }

  formatearNumero() {
    this.numeroDocumento = this.numeroDocumento.replace(/\D/g, '');
    this.numeroDocumento = this.numeroDocumento.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.'
    );
    this.validarCampos();
  }

  consultarCliente() {
    this.http.get('/assets/clientes.json').subscribe((data: any) => {
      const cliente = data.find(
        (c: any) =>
          c.tipoDocumento === this.tipoDocumento &&
          c.numeroDocumento === this.numeroDocumento.replace(/\./g, '')
      );

      if (cliente) {
        // Redirigir al componente de resumen con los datos del cliente
        this.router.navigate(['/resumen'], { state: { cliente } });
      } else {
        alert('Cliente no encontrado');
      }
    });
  }
}
