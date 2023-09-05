import { ComponentRef, EmbeddedViewRef } from '@angular/core';

import { View } from '@nativescript/core';

export type ViewWithNgRef = View & { __ngRef?: ComponentRef<View> | EmbeddedViewRef<View> };
