import { Component, OnInit } from '@angular/core';

import { RouterExtensions } from '@nativescript/angular';

import { Routes } from '@src/app/core/constants/routes';

/**
 * HomeComponent
 *
 */
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    readonly routes = Routes;

    /**
     *
     */
    constructor(
        private routerExtensions: RouterExtensions,
    ) {
        // Use the component constructor to inject providers.
    }

    /**
     *
     */
    ngOnInit(): void {
        // Init your component properties here.
    }


    /**
     *
     * @param route
     */
    onButtonTap(route: string): void {

        this.routerExtensions.navigate([route]);
    }
}
