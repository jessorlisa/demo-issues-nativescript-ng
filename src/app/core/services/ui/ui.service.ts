import { ComponentRef, Injectable, InjectionToken, Injector } from '@angular/core';

import {
    CoreTypes,
    getRootLayout,
    Screen,
    View
} from '@nativescript/core';

import { generateNativeScriptView } from '@nativescript/angular';

import { DrawerComponent } from '@src/app/shared/components/drawer/drawer.component';

export const GenericParams = new InjectionToken<any>('RootLayoutGenericParams');

export const DEFAULT_ANIMATION_CURVE = CoreTypes.AnimationCurve.cubicBezier(0.17, 0.89, 0.24, 1);


@Injectable({
    providedIn: 'root',
})
export class UIService {

    private drawer;
    private drawerWidth = 360;
    private drawerDividerWidth = this.drawerWidth - 2 * 28;
    private shadeCoverOpacity = 0.4;

    /**
     *
     * @param injector
     */
    constructor(
        private injector: Injector,
    ) {

        this.drawerWidth = Math.round(Math.min(0.8 * this.getMinDIPs(), this.drawerWidth));
        this.drawerDividerWidth = this.drawerWidth - 2 * 28;
    }

    /**
     * ************************************************************************
     * Drawer:
     */

    /**
     *
     */
    openDrawer(): void {
        this.getView(DrawerComponent).then((v) => {
            this.drawer = v;
            getRootLayout()
                .open(this.drawer, {
                    shadeCover: {
                        color: '#ececec',
                        opacity: this.shadeCoverOpacity, // taken
                        tapToClose: true,
                    },
                    animation: {
                        enterFrom: {
                            translateX: -this.drawerWidth,
                            duration: this.drawerWidth,
                            curve: DEFAULT_ANIMATION_CURVE,
                        },
                        exitTo: {
                            translateX: -this.drawerWidth,
                            duration: this.drawerWidth,
                            curve: DEFAULT_ANIMATION_CURVE,
                        },
                    },
                })
                .then(() => {
                })
                .catch((err) => {
                    console.log('error opening', err);
                });
        });
    }

    /**
     *
     */
    closeDrawer(): void {
        if (this.drawer) {
            getRootLayout()
                .close(this.drawer)
                .then(() => {
                    this.destroyNgRef(this.drawer);
                })
                .catch((err) => {
                    console.log('error closing', err);
                });
        }
    }

    /**
     *
     */
    getDrawerWidth(): number {
        return this.drawerWidth;
    }

    /**
     *
     */
    getDrawerDividerWidth(): number {
        return this.drawerDividerWidth;
    }

    /**
     * ************************************************************************
     * Helper:
     */

    /**
     *
     */
    getMinDIPs(): number {

        return Math.round(Math.min(Screen.mainScreen.widthDIPs, Screen.mainScreen.heightDIPs));
    }

    /**
     *
     */
    getScreenHeight(): number {

        return Math.round(Screen.mainScreen.heightDIPs);
    }

    /**
     *
     */
    getScreenWidth(): number {

        return Math.round(Screen.mainScreen.widthDIPs);
    }

    /**
     *
     * @param component
     * @param input
     */
    getView(component, input?: any): Promise<View> {

        return new Promise((resolve) => {
            const injector = Injector.create({
                providers: [{provide: GenericParams, useValue: input}],
                parent: this.injector,
            });
            const cmpRef = generateNativeScriptView(component, {
                injector,
            });
            (cmpRef.firstNativeLikeView as any).__ngRef = cmpRef.ref;
            resolve(cmpRef.firstNativeLikeView);
        });
    }

    /**
     *
     * @param view
     */
    destroyNgRef(view: View): void {
        if ((view as any).__ngRef) {
            ((view as any).__ngRef as ComponentRef<View>).destroy();
        }
    }

}
