import { Component, OnInit, ViewChild } from '@angular/core';

import { ObservableArray } from '@nativescript/core';

import { RadListViewComponent } from 'nativescript-ui-listview/angular';

import { DataItem } from '@src/app/core/services/data-item/data-item';
import { DataItemService } from '@src/app/core/services/data-item/data-item.service';

/**
 * TabsComponent
 *
 * Contains a sample NativeScript Material Tabs implementation
 *
 * with a RadListView in the first tab
 *
 * roughly taken from
 * https://www.npmjs.com/package/@nativescript-community/ui-material-tabs
 * https://github.com/ProgressNS/nativescript-ui-samples-angular/blob/master/listview/src/app/examples/grouping-with-header-footer/with-header-footer.component.ts
 */
@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

    private _dataItems: ObservableArray<DataItem>;
    private _myGroupingFunc: (item: any) => any;

    @ViewChild('myListView', {read: RadListViewComponent}) myListViewComponent: RadListViewComponent;

    constructor(private _dataItemService: DataItemService) {
        this.myGroupingFunc = (item: DataItem) => item.category;
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
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
}
