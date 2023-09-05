import { Injectable } from '@angular/core';

import { DataItem } from '@src/app/core/services/data-item/data-item';
import { DATAITEMS } from '@src/app/core/services/data-item/mock-data-items';

const GENERATED_ITEMS_COUNT = 50;
const GROUPS_COUNT = 3;
const SPECIAL_ITEM_INTERVAL = 4;
const generateItems = (): DataItem[] => {
    const generatedItems = [];

    for (let i = 1; i <= GENERATED_ITEMS_COUNT; i++) {
        generatedItems.push(new DataItem(
            i,
            i % SPECIAL_ITEM_INTERVAL === 0 ? `Special Item ${i}` : `Item ${i}`,
            `This is an item, category is: Category ${i % GROUPS_COUNT}`,
            '',
            '',
            '',
            false,
            '',
            `Category ${i % GROUPS_COUNT}`
        ));
    }

    return generatedItems;
};

@Injectable({
    providedIn: 'root'
})
export class DataItemService {

    getDataItems(): DataItem[] {
        return DATAITEMS;
    }

    getGeneratedDataItems(): DataItem[] {
        return generateItems();
    }
}
