import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {
    NativeScriptAnimationsModule,
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    NativeScriptModule
} from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { FirebaseService } from '@src/app/core/services/firebase/firebase.service';
import { SettingsService } from '@src/app/core/services/settings/settings.service';

import { SharedModule } from '@src/app/shared/shared.module';

/**
 *
 * @param settingsService
 */
export const initializeAppFactory = (settingsService: SettingsService) => () => settingsService.load();

export const initializeFirebase = (firebaseService: FirebaseService) => () => firebaseService.init();


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        // external
        NativeScriptModule,
        NativeScriptCommonModule,
        NativeScriptHttpClientModule,
        NativeScriptAnimationsModule,
        // internal
        AppRoutingModule,
        SharedModule
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeAppFactory,
            deps: [SettingsService],
            multi: true,
        },
        {
            // this 2nd APP_INITIALIZER token resolves the issue described in this branch!
            provide: APP_INITIALIZER,
            useFactory: initializeFirebase,
            deps: [FirebaseService],
            multi: true,
        },
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
