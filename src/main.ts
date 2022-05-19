import { Application } from '@nativescript/core';

import { NativeScriptNgZone, platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { firebase } from '@nativescript/firebase-core';


import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';

import { AppModule } from '@src/app/app.module';

import { LoadingModule } from '@src/app/features/loading/loading.module';

Application.on('launch', (args) => {
    console.log('launch');
});

firebase()
    .initializeApp()
    .then((done) => {
        console.log('initializeApp');
    });

const messaging = firebase().messaging();

messaging
    .requestPermission()
    .then(() => {
        console.log('requestPermission', 'done');
        messaging.registerDeviceForRemoteMessages().catch((e) => {
            console.error('registerDeviceForRemoteMessages', e);
        });
    })
    .catch((e) => {
        console.error('requestPermission', e);
    });

runNativeScriptAngularApp({
    appModuleBootstrap: (reason: string) => platformNativeScript().bootstrapModule(AppModule, {
        ngZone: new NativeScriptNgZone()
    }),
    loadingModule: (reason: string) => platformNativeScript().bootstrapModule(LoadingModule),
});

ImageCacheIt.enableAutoMM();
