import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from '@nativescript/angular';

import { SettingsComponent } from '@src/app/features/settings/settings.component';

const routes: Routes = [{path: '', component: SettingsComponent}];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class SettingsRoutingModule {
}
