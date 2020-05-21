import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas 
import { APP_ROUTES } from './app.routes';

//modulos
import { PageModule } from './pages/pages.module'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PageModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
