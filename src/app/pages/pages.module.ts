import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

// modulo de rotas da home
import { RoutingModule } from './routing.module';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
