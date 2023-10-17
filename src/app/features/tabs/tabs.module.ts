import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CollectionViewModule } from '@nstudio/ui-collectionview/angular';

import { ItemListComponent } from '@src/app/features/tabs/components/item-list.component';
import { TabsRoutingModule } from '@src/app/features/tabs/tabs-routing.module';
import { TabsComponent } from '@src/app/features/tabs/tabs.component';

import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
    imports: [
        // external
        CollectionViewModule,
        // internal
        SharedModule,
        TabsRoutingModule
    ],
    declarations: [TabsComponent, ItemListComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TabsModule {
}
