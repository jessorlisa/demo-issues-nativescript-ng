import { Component, Input, OnInit } from '@angular/core';

import { ObservableArray } from '@nativescript/core';

import { DataItem } from '@src/app/core/services/data-item/data-item';
import { DataItemService } from '@src/app/core/services/data-item/data-item.service';

/**
 * ItemListComponent
 *
 */
@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

    @Input()
    itemPrefix: string = '';

    private _dataItems!: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit(): void {
        this._dataItems = new ObservableArray(this._dataItemService.getGeneratedDataItems(this.itemPrefix));
    }
}
