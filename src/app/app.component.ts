import { Component, OnInit } from '@angular/core';

import { ApplicationSettings } from '@nativescript/core';

import { Theme } from '@nativescript/theme';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    /**
     *
     */
    constructor() {
        const themeTimeout = 0;

        setTimeout(() => {

            try {
                // set app theme from ApplicationSettings
                const theme = ApplicationSettings.getString('theme', Theme.Auto as string);
                Theme.setMode(theme);
                console.log('[AppComponent][Theme.setMode]', theme);
            } catch (e) {
                console.error('[AppComponent][Theme.setMode] error', e);
            }
        }, themeTimeout);
    }

    /**
     *
     */
    ngOnInit(): void {
    }
}
