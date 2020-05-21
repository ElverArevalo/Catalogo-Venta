import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { LineaComponent } from './pages/linea/linea.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProductoComponent } from './pages/producto/producto.component';


const appRoutes: Routes =[
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
 { path:'', component: PagesComponent},

 { path:'login', component: LoginComponent},
 
// {path:'**', redirectTo: '/dashboard', pathMatch: 'full'},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});