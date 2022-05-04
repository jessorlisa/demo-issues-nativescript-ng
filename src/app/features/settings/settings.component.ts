import { Component, OnInit } from '@angular/core';

import { SettingsService } from '@src/app/core/services/settings/settings.service';

export interface ListItem {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    key?: string;
    keyIndex?: number;
    template?: string;
    text?: string;
}

/**
 * SettingsComponent
 *
 */
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

    settingsItems: ListItem[];

    loading = true;

    /**
     *
     */
    constructor(private settingsService: SettingsService) {

    }

    /**
     *
     */
    ngOnInit(): void {

        this.settingsService.load()
            .finally(() => {

                this.loading = false;

                this.initSettingsItems();
            });
    }

    /**
     *
     */
    private initSettingsItems(): void {

        this.settingsItems = [
            {
                name: 'General',
                template: 'group'
            },
            {
                name: 'Language',
                key: 'language',
                text: 'English',
                template: 'item'
            },
            {
                name: 'Switches',
                template: 'group'
            },
            {
                name: 'Option 1',
                key: 'option1',
                checked: true,
                disabled: false,
                template: 'itemToggle'
            },
            {
                name: 'Option 2',
                key: 'option2',
                checked: true,
                disabled: false,
                template: 'itemToggle'
            },
            {
                name: 'Option 3',
                key: 'option3',
                checked: true,
                disabled: false,
                template: 'itemToggle'
            },
            {
                name: 'More',
                template: 'group'
            },
            {
                name: 'Setting 1',
                key: 'setting1',
                text: 'Value for setting 1',
                template: 'item'
            },
            {
                name: 'Setting 2',
                key: 'setting2',
                text: 'Value for setting 2',
                template: 'item'
            },
            {
                name: 'Setting 3',
                key: 'setting3',
                text: 'Value for setting 3',
                template: 'item'
            },
            {
                name: 'About',
                template: 'group'
            },
            {
                name: 'Version',
                key: 'version',
                text: '1.0.0',
                template: 'item'
            },
        ];
    }

    /**
     * ************************************************************************
     * ListView:
     */

    /**
     *
     * @param item
     */
    itemTemplateSelector(item: ListItem): string {
        return item.template;
    }

    /**
     *
     * @param args
     */
    onItemTap(args: any): void {

        const item = this.settingsItems[args.index];
        if (item.template === 'group' || item.template === 'itemToggle') {
            return;
        }

        const key = item.key;
        switch (key) {
            // @todo if required for issue reproduction
            default:
                break;
        }
    }

    /**
     * ************************************************************************
     * Actions:
     */

    /**
     *
     * @param args
     */
    onSwitchChanged(args: any): void {

        const switchId = args.object.id;
        if (switchId) {
            // @todo if required for issue reproduction
        }
    }
}
