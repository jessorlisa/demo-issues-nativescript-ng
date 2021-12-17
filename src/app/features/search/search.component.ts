import { Component, OnInit, ViewChild } from '@angular/core';

import { ObservableArray } from '@nativescript/core';

import { RadListViewComponent } from 'nativescript-ui-listview/angular';

import { DataItem } from '@src/app/core/services/data-item/data-item';
import { DataItemService } from '@src/app/core/services/data-item/data-item.service';

/**
 * SearchComponent
 *
 * Contains a sample RadListView implementation
 *
 * roughly taken from
 * https://github.com/ProgressNS/nativescript-ui-samples-angular/blob/master/listview/src/app/examples/grouping-with-header-footer/with-header-footer.component.ts
 */
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

    private _dataItems: ObservableArray<DataItem>;
    private _isEnabled: boolean;
    private _myGroupingFunc: (item: any) => any;

    @ViewChild('myListView', {read: RadListViewComponent}) myListViewComponent: RadListViewComponent;

    constructor(private _dataItemService: DataItemService) {
        this.myGroupingFunc = (item: DataItem) => item.category;
        this.isEnabled = true;
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get isEnabled(): boolean {
        return this._isEnabled;
    }

    set isEnabled(value: boolean) {
        this._isEnabled = value;
    }

    get myGroupingFunc(): (item: any) => any {
        return this._myGroupingFunc;
    }

    set myGroupingFunc(value: (item: any) => any) {
        this._myGroupingFunc = value;
    }

    ngOnInit(): void {
        this._dataItems = new ObservableArray(this._dataItemService.getGeneratedDataItems());
    }

    toggleGrouping(): void {
        const listView = this.myListViewComponent.listView;
        if (!listView.groupingFunction) {
            listView.groupingFunction = this.myGroupingFunc;
            this.isEnabled = true;
        } else {
            listView.groupingFunction = undefined;
            this.isEnabled = false;
        }
    }
}
