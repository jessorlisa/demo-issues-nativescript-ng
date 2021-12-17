import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {
    NativeScriptAnimationsModule,
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    NativeScriptModule
} from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        // external
        NativeScriptModule,
        NativeScriptCommonModule,
        NativeScriptHttpClientModule,
        NativeScriptAnimationsModule,
        // internal
        AppRoutingModule,
        SharedModule
    ],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
