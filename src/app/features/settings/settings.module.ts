import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SettingsRoutingModule } from '@src/app/features/settings/settings-routing.module';
import { SettingsComponent } from '@src/app/features/settings/settings.component';

import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
    imports: [
        SettingsRoutingModule,
        SharedModule
    ],
    declarations: [SettingsComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {
}
