import { Component, OnInit } from '@angular/core';

import { ObservableArray } from '@nativescript/core';

import { DataItem } from '@src/app/core/services/data-item/data-item';
import { DataItemService } from '@src/app/core/services/data-item/data-item.service';

/**
 * TabsComponent
 *
 * Contains a sample NativeScript Material Tabs implementation
 *
 * with a CollectionView in the first tab
 *
 * roughly taken from
 * https://www.npmjs.com/package/@nativescript-community/ui-material-tabs
 */
@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

    private _dataItems!: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit(): void {
        this._dataItems = new ObservableArray(this._dataItemService.getGeneratedDataItems());
    }
}
