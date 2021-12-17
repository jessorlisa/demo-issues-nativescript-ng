import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from '@src/app/app.module';

runNativeScriptAngularApp({
    appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule, {
        ngZoneEventCoalescing: true
    })
});
