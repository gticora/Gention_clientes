import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ResumenComponent } from './resumen/resumen.component';

export const routes: Routes = [
    { path: '', component: IngresoComponent },
    { path: 'resumen', component: ResumenComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirige cualquier ruta desconocida al componente de ingreso
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}