import {RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineaComponent } from './linea/linea.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';


const pagesRoutes: Routes = [ 
    {
        path: '',
        component: PagesComponent,
        children:[
            { path:'dashboard', component: DashboardComponent},
            { path:'linea', component: LineaComponent},
            { path:'categoria', component: CategoriaComponent},
            { path:'producto', component: ProductoComponent},
            {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
            },
    
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);