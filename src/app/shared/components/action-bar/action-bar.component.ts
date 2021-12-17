import { Component, Input, OnInit } from '@angular/core';

import { Icons } from '@src/app/core/constants/icons';
import { UIService } from '@src/app/core/services/ui/ui.service';

@Component({
    selector: 'app-action-bar',
    templateUrl: './action-bar.component.html'
})
export class ActionBarComponent implements OnInit {

    readonly icons = Icons;

    @Input()
    title: string;

    /**
     * ************************************************************************
     * Init:
     */

    /**
     *
     * @param uiService
     */
    constructor(
        private uiService: UIService,
    ) {
    }

    /**
     *
     */
    ngOnInit(): void {
    }

    /**
     * ************************************************************************
     * Actions:
     */

    /**
     *
     */
    openDrawer(): void {

        this.uiService.openDrawer();
    }
}
