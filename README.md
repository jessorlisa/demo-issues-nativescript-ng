# demo-issues-nativescript-ng

Demo project source for issues related to NativeScript (Angular flavour)

## Environment

- Node.js: v16
- Android SDK: 30
- JDK 11
- Xcode: 13.3.1
- CocoaPods 1.11.2
- CLI: latest `nativescript@8.2.2`
- Cross-platform modules: `@nativescript/core@8.1.5`
- Android Runtime: `@nativescript/android@8.1.1`
- iOS Runtime: `@nativescript/ios@6.5.5` (JSC!)
- Angular: `@angular/core@13.2.5`
- Plugin(s):
  `├── @nativescript/theme@3.0.2`

## Setup

- `npm -g install @nativescript@latest`
- Clone the demo project
- Check out the issue related branch (if available)
- `npm run clean`
- Run the project:
    - `npm run android` / `npm run ios`

## Issue Description

[**Issue with APP_INITIALIZER and NativeScript Theme: Core V2**](https://github.com/NativeScript/angular/issues/66)

The Theme.setMode() from the NativeScript Theme plugin stops working when an async APP_INITIALIZER is used.

## Reproduction

Steps to reproduce:
- run `npm run android` or `npm run ios` (the home component will show some theme/system appearance details)
- tap "Change app theme" and choose the opposite theme to your current device setting, the theme changes correctly for now, but
  **Problem 1**: as you can see Application.systemAppearance() now shows a wrong value (e.g. "dark", even if the device is in light mode)
- Close the app (not only put it to background)
- Restart the app ...
  **Problem 2**: The app theme is back to auto, although it is set to a specific mode in the [AppComponent](https://github.com/jessorlisa/demo-issues-nativescript-ng/blob/cb85dac0a64659b2f9a0e06b8f160bd0bdd01723/src/app/app.component.ts#L24)


But if you disable the APP_INITIALIZER by removing the APP_INITIALIZER from the providers array in [app.module.ts](https://github.com/jessorlisa/demo-issues-nativescript-ng/blob/cb85dac0a64659b2f9a0e06b8f160bd0bdd01723/src/app/app.module.ts#L37) everything is working just fine.


## Additional context
My first suspicion was that something was amiss with the theme but then I could narrow it down to the APP_INITIALIZER.

Any thoughts? Help?
