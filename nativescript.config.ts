import { NativeScriptConfig } from '@nativescript/core';

export default {
    id: 'dev.jessorlisa.demoissuesnativescriptng',
    appPath: 'src',
    appResourcesPath: 'App_Resources',
    android: {
        v8Flags: '--expose_gc',
        markingMode: 'none',
        maxLogcatObjectSize: 8192,
    }
} as NativeScriptConfig;
