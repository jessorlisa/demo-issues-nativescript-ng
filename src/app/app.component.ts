import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '@src/app/core/services/firebase/firebase.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    /**
     *
     * @param firebaseService
     */
    constructor(
        private firebaseService: FirebaseService
    ) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
    }
}
