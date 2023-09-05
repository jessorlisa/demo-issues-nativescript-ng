import { NativeScriptNgZone, platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import '@nativescript/local-notifications';

import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';

import { AppModule } from '@src/app/app.module';

import { LoadingModule } from '@src/app/features/loading/loading.module';

runNativeScriptAngularApp({
    appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule, {
        ngZone: new NativeScriptNgZone()
    }),
    loadingModule: () => platformNativeScript().bootstrapModule(LoadingModule),
});

ImageCacheIt.enableAutoMM();
