import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from '@nativescript/angular';

import { TabsComponent } from '@src/app/features/tabs/tabs.component';

const routes: Routes = [{path: '', component: TabsComponent}];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class TabsRoutingModule {
}
