import { NativeScriptNgZone, platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';

import { AppModule } from '@src/app/app.module';

import { LoadingModule } from '@src/app/features/loading/loading.module';

runNativeScriptAngularApp({
    appModuleBootstrap: (reason: string) => platformNativeScript().bootstrapModule(AppModule, {
        ngZone: new NativeScriptNgZone()
    }),
    loadingModule: (reason: string) => platformNativeScript().bootstrapModule(LoadingModule),
});

ImageCacheIt.enableAutoMM();
