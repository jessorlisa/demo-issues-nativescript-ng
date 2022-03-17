import { Injectable } from '@angular/core';

import { Dialogs } from '@nativescript/core';

import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {

    /**
     *
     */
    constructor() {

        const messaging = firebase().messaging();

        messaging.onToken((token) => {
            console.log('Firebase onToken', token);
            this.showAlertDialog('Firebase onToken');
        });

        messaging.onMessage((message) => {
            console.log('Firebase onMessage', message);
            this.showAlertDialog('Firebase onMessage');
        });

        messaging.onNotificationTap((message) => {
            console.log('Firebase onNotificationTap', message);
            this.showAlertDialog('Firebase onNotificationTap');
        });

        messaging
            .getToken()
            .then((token: string) => {
                console.log('FCM registration token (please copy): ', token);
            })
            .catch((e) => {
                console.error('Error messaging.getToken() failed');
            });

    }

    /**
     *
     * @param text
     */
    showAlertDialog(text: string): void {
        const alertOptions = {
            title: 'Test FCM',
            message: text,
            okButtonText: 'Okay',
            cancelable: false
        };

        Dialogs.alert(alertOptions).then(() => {
            // ...
        });
    }
}
