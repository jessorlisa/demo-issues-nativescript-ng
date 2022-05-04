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
    load(): Promise<any> {

        return new Promise((resolve, reject) => {

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
