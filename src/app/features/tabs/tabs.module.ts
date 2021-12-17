import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { TabsRoutingModule } from '@src/app/features/tabs/tabs-routing.module';
import { TabsComponent } from '@src/app/features/tabs/tabs.component';

import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        TabsRoutingModule],
    declarations: [TabsComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TabsModule {
}
