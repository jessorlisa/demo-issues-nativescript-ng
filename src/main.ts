import { NativeScriptNgZone, platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';

import { AppModule } from '@src/app/app.module';

runNativeScriptAngularApp({
    appModuleBootstrap: (reason: string) => platformNativeScript().bootstrapModule(AppModule, {
        ngZone: new NativeScriptNgZone()
    })
});

ImageCacheIt.enableAutoMM();
