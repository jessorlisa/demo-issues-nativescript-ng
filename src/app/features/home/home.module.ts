import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeRoutingModule } from '@src/app/features/home/home-routing.module';
import { HomeComponent } from '@src/app/features/home/home.component';

import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [HomeComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {
}
