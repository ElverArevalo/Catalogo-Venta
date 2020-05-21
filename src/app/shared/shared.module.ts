import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent
    ]
})
export class SharedModule{}
