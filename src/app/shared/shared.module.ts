import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeDialogModule, NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { NativeScriptMaterialActivityIndicatorModule } from '@nativescript-community/ui-material-activityindicator/angular';
import { NativeScriptMaterialTabsModule } from '@nativescript-community/ui-material-tabs/angular';

import { WebViewExtModule } from '@nota/nativescript-webview-ext/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

import { ActionBarComponent } from '@src/app/shared/components/action-bar/action-bar.component';
import { DrawerComponent } from '@src/app/shared/components/drawer/drawer.component';

const COMPONENTS = [
    ActionBarComponent,
    DrawerComponent,
];

const PIPES = [
];

@NgModule({
    imports: [
        NativeDialogModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptMaterialActivityIndicatorModule,
        NativeScriptMaterialTabsModule,
        NativeScriptUIListViewModule,
        WebViewExtModule
    ],
    declarations: [
        ...COMPONENTS,
        ...PIPES
    ],
    exports: [
        // external
        NativeDialogModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        WebViewExtModule,
        // internal
        ...COMPONENTS,
        ...PIPES
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class SharedModule {
}
