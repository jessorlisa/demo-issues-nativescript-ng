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
  `├── @nativescript/firebase-core@2.0.0`
  `├── @nativescript/firebase-messaging@2.0.0`

## Setup

- `npm -g install nativescript@8.2.2`
- Clone the demo project
- Check out the issue related branch (if available)
- `npm run clean`
- Run the project:
    - `npm run android` / `npm run ios`

## Update
**2022-05-19**: Issue resolved by latest plugin version `@nativescript/firebase-messaging@2.0.0` and changing some wiring.
More details can be found [here](https://github.com/NativeScript/firebase/issues/77#issuecomment-1131649976).


## Issue Description

**Issue with message handlers in @nativescript/firebase-messaging**

_General setup taken from the plugin's [demo project](https://github.com/NativeScript/firebase/tree/main/apps/demo-angular)._

Handlers are added in a service: FirebaseService (src/app/core/services/firebase/firebase.service.ts)

3 test scenarios:
- FCM message received while in foreground: onMessage (Android/iOS)
- notification tapped while in background: onNotificationTap (Android/iOS)
- notification tapped while closed: **none** (Android/iOS)


Expected result: `onNotificationTap` is called when app was closed and notification was tapped

## Reproduction

**Temporarily:**

For quick reproduction I have added a google-services.json for the Android runtime (firebase project will only last until this is resolved).

Steps to reproduce:
- run `npm run android`
- copy your FCM registration token from the console output, sth. like `e1oA9...lqCn8`
- server key: send me a private message on [discord](https://nativescript.org/discord), @jessorlisa
- trigger FCM messages using curl (see below) when
    - app is in foreground: :white_check_mark: `onMessage` is called
    - app is in background: :white_check_mark: `onNotificationTap` is called
    - app is closed: :exclamation: **none** is called
```
curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
  --header 'Authorization: key=<server key>' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "to" : "<your FCM registration token>",
  "notification" : {
  "body" : "Test FCM",
  "title": "Test message to demonstrate issue when app was closed upon notification"
  }
  }'
```

Result: `onMessage` / `onNotificationTap` are only called when app in foreground or background, not when app is closed


-------
**In General:**

Attention: Firebase project required!

**Android**
- Ensure google-services.json file located in App_Resources/Android/src.
- run `npm run android`
- trigger FCM messages when
    - app is in foreground: :white_check_mark: `onMessage` is called
    - app is in background: :white_check_mark: `onNotificationTap` is called
    - app is closed: :exclamation: **none** is called

**iOS**
- Ensure GoogleService-Info.plist file located in App_Resources/iOS.
- Follow integration setup as described [here](https://github.com/NativeScript/firebase/tree/main/packages/firebase-messaging#apple-integration).
- trigger FCM messages when
    - app is in foreground: :white_check_mark: `onMessage` is called
    - app is in background: :white_check_mark: `onNotificationTap` is called
    - app is closed: :exclamation: **none** is called

