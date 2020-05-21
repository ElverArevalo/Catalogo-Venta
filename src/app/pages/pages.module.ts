import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineaComponent } from './linea/linea.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations:[
        DashboardComponent,
        LineaComponent,
        CategoriaComponent,
        ProductoComponent,
        PagesComponent,

    ],
    exports: [
        DashboardComponent,
        LineaComponent,
        CategoriaComponent,
        ProductoComponent 
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
    
}) 

export class PageModule{}