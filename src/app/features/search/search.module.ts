import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SearchRoutingModule } from '@src/app/features/search/search-routing.module';
import { SearchComponent } from '@src/app/features/search/search.component';

import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
    imports: [
        SearchRoutingModule,
        SharedModule
    ],
    declarations: [SearchComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {
}
