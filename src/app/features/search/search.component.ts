import { Component, OnInit } from '@angular/core';

import { ObservableArray } from '@nativescript/core';

import { DataItem } from '@src/app/core/services/data-item/data-item';
import { DataItemService } from '@src/app/core/services/data-item/data-item.service';

/**
 * SearchComponent
 *
 */
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

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
