import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeDialogModule, NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { NativeScriptMaterialTabsModule } from '@nativescript-community/ui-material-tabs/angular';

import { ActionBarComponent } from '@src/app/shared/components/action-bar/action-bar.component';
import { DrawerComponent } from '@src/app/shared/components/drawer/drawer.component';

const COMPONENTS = [
    ActionBarComponent,
    DrawerComponent,
];

// const PIPES = [];

@NgModule({
    imports: [
        NativeDialogModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptMaterialTabsModule
    ],
    declarations: [
        ...COMPONENTS,
        // ...PIPES
    ],
    exports: [
        // external,
        NativeDialogModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        // internal
        ...COMPONENTS,
        // ...PIPES
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class SharedModule {
}
