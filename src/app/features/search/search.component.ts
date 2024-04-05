import { Component, OnInit } from '@angular/core';

import { confirm, ConfirmOptions, EventData, ObservableArray } from '@nativescript/core';

import { registerElement , RouterExtensions } from '@nativescript/angular';

import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh';

import { CollectionView } from '@nstudio/ui-collectionview';

import { Routes } from '@src/app/core/constants/routes';
import { DataItem } from '@src/app/core/services/data-item/data-item';
import { DataItemService } from '@src/app/core/services/data-item/data-item.service';
import { createLayout } from '@src/app/core/services/ui/config/collectionview-layout';
import { SwipeResult } from '@src/app/core/services/ui/interfaces/swipe-result.interface';

const SPECIAL_ITEM_INTERVAL = 4;

registerElement('PullToRefresh', () => PullToRefresh);

/**
 * SearchComponent
 *
 */
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

    collectionView!: CollectionView;

    private _dataItems!: ObservableArray<DataItem>;

    /**
     *
     * @param routerExtensions
     * @param _dataItemService
     */
    constructor(
        private routerExtensions: RouterExtensions,
                private _dataItemService: DataItemService
    ) {

        CollectionView.registerLayoutStyle('swipe', {
            createLayout: this.createSwipeLayout.bind(this)
        });
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit(): void {
        this._dataItems = new ObservableArray(this._dataItemService.getGeneratedDataItems());
    }

    /**
     *
     * @param args
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    refresh(args?: any): void {

        setTimeout(() => {
            this._dataItems = new ObservableArray(this._dataItemService.getGeneratedDataItems());

            // triggered via pull to refresh
            if (args && args.object) {
                const pullRefresh = args.object;
                pullRefresh.refreshing = false;
            }
            console.log('refreshed');

        }, 1000);

    }

    /**
     *
     * @param view
     */
    createSwipeLayout(view: CollectionView) { // uiService?
        // Pass the callback function to createLayout
        return createLayout(view, this.onSwipeFinished.bind(this));
    }

    onCollectionViewLoaded(args: Event) {
        const nativeScriptEvent = args as unknown as EventData;
        this.collectionView = nativeScriptEvent.object as CollectionView;
    }

    /**
     *
     * @param item
     */
    itemTemplateSelector(item: DataItem): string {

        let template = 'debugging';

        if (item.id && item.id % SPECIAL_ITEM_INTERVAL === 0) {
            template = 'debugging-bold';
        }

        return template;
    }

    /**
     *
     * @param swipeResult
     */
    onSwipeFinished(swipeResult: SwipeResult) {

        if (swipeResult.leftThresholdPassed) {
            // delete?

            const cleanOptions: ConfirmOptions = {
                cancelButtonText: 'Cancel',
                message: 'Are you sure you want to delete that item?',
                // neutralButtonText: options.neutralButtonText ? t[options.neutralButtonText] : null, // makes no real sense for confirm dialogs?
                okButtonText: 'OK',
                title: 'Confirm',
            };

            confirm(cleanOptions).then((result) => {

                if (result) {
                    this._dataItems.splice(swipeResult.index, 1);
                }

                // refresh the collection view
                this.collectionView.refresh();
            });



        } else if (swipeResult.rightThresholdPassed) {
            // edit/view
            this.routerExtensions.navigate([Routes.tabs]);
        }
    }
}
