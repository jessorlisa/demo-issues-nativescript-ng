import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from '@nativescript/angular';

import { SearchComponent } from '@src/app/features/search/search.component';

const routes: Routes = [{path: '', component: SearchComponent}];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class SearchRoutingModule {
}
