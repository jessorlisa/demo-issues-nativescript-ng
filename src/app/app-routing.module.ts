import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home',
        loadChildren: () => import('@src/app/features/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'tabs',
        loadChildren: () => import('@src/app/features/tabs/tabs.module').then((m) => m.TabsModule),
    },
    {
        path: 'search',
        loadChildren: () => import('@src/app/features/search/search.module').then((m) => m.SearchModule),
    },
    {
        path: 'settings',
        loadChildren: () => import('@src/app/features/settings/settings.module').then((m) => m.SettingsModule),
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {
}
