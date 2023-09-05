import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    private loading = false;

    /**
     *
     */
    constructor() {
    }

    /**
     * Load settings
     *
     */
    load(): Promise<null> {

        return new Promise((resolve) => {

            if (this.loading) {
                resolve(null);
                return;
            }

            this.loading = true;
            setTimeout(() => {
                this.loading = false;

                resolve(null);
            }, 1500); // mimic some loading from remote
        });
    }
}
