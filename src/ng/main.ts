import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

import { appRoutes } from './app.routes';
import { LayoutComponent } from './layout/layout.component';
import { RedisStateService } from './services/redis-state.service';
import { SettingsService } from './services/settings.service';

bootstrapApplication(LayoutComponent, {
    providers: [
        importProvidersFrom(
            RouterModule.forRoot(appRoutes),
            MatSnackBarModule,
            MatDialogModule,
        ),
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { position: 'above' } },
    ],
}).then((appRef) => {
    (globalThis as any).__p3xr_snackbar = appRef.injector.get(MatSnackBar);

    // Expose state for Playwright E2E tests
    const stateService = appRef.injector.get(RedisStateService);
    const settingsService = appRef.injector.get(SettingsService);
    (globalThis as any).__p3xr_test = {
        state: stateService,
        settings: settingsService,
    };

    console.info('Angular bootstrap complete');
}).catch(err => {
    console.error('Angular bootstrap error:', err);
});
