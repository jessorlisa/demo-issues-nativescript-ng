import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule, NativeScriptModule } from '@nativescript/angular';

import { NativeScriptMaterialActivityIndicatorModule } from '@nativescript-community/ui-material-activityindicator/angular';

import { LoadingComponent } from '@src/app/features/loading/loading.component';

@NgModule({
    bootstrap: [
        LoadingComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptModule,
        NativeScriptMaterialActivityIndicatorModule
    ],
    declarations: [
        LoadingComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class LoadingModule {
}
