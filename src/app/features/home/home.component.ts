import { Component, OnInit } from '@angular/core';

import { action, Application, ApplicationSettings } from '@nativescript/core';

import { RouterExtensions } from '@nativescript/angular';
import { Theme } from '@nativescript/theme';

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

    appSystemAppearance: string;
    appTheme: string;
    appThemeSetting: string;

    /**
     *
     */
    constructor(
        private routerExtensions: RouterExtensions
    ) {
    }

    /**
     *
     */
    ngOnInit(): void {

        this.appSystemAppearance = Application.systemAppearance();
        this.appTheme = Theme.getMode();
        this.appThemeSetting = ApplicationSettings.getString('theme', Theme.Auto as string);
    }

    /**
     *
     */
    onThemeTap(): void {


        const actions = [
            Theme.Light,
            Theme.Dark,
            Theme.Auto,
        ];

        action({
            actions: actions,
            title: 'Choose app theme'
        }).then((result) => {
            ApplicationSettings.setString('theme', result as string);
            Theme.setMode(result);
            console.log('[HomeComponent][Theme.setMode]', result);

            this.appSystemAppearance = Application.systemAppearance();
            this.appTheme = Theme.getMode();
            this.appThemeSetting = ApplicationSettings.getString('theme', Theme.Auto as string);
        });
    }


    /**
     *
     * @param route
     */
    onButtonTap(route: string): void {

        this.routerExtensions.navigate([route]);
    }
}
