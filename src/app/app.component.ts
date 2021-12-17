import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';

import { Application } from '@nativescript/core';

import { RouterExtensions } from '@nativescript/angular';

import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = '/home';

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects));
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade',
            },
        });
    }
}
