import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { SwipeDirection, SwipeGestureEventData } from '@nativescript/core';

import { RouterExtensions } from '@nativescript/angular';

import { Icons } from '@src/app/core/constants/icons';
import { Routes } from '@src/app/core/constants/routes';
import { UIService } from '@src/app/core/services/ui/ui.service';


@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html'
})
export class DrawerComponent {
    readonly icons = Icons;
    readonly routes = Routes;

    drawerWidth: number;
    drawerDividerWidth: number;

    /**
     *
     * @param router
     * @param routerExtensions
     * @param uiService
     */
    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private uiService: UIService,
    ) {
        this.drawerWidth = this.uiService.getDrawerWidth();
        this.drawerDividerWidth = this.uiService.getDrawerDividerWidth();
    }

    /**
     *
     * @param args
     */
    onSwipe(args: Event): void {

        const nativeScriptEvent = args as unknown as SwipeGestureEventData;

        if (nativeScriptEvent.direction === SwipeDirection.left) {
            this.uiService.closeDrawer();
        } else if (nativeScriptEvent.direction === SwipeDirection.right) {
            // nice to have: some fancy bouncing effect?
        }
    }

    /**
     *
     * @param navItemRoute
     */
    onNavItemTap(navItemRoute: string): void {

        this.routerExtensions.navigate([navItemRoute]);
        this.closeDrawer();
    }


    /**
     *
     */
    closeDrawer(): void {
        this.uiService.closeDrawer();
    }


    /**
     *
     * @param route
     */
    isCurrentRoute(route: string): boolean {

        return this.router.url === route;
    }
}
