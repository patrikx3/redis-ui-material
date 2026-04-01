import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, enableProdMode, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

import { appRoutes } from './app.routes';
import { LayoutComponent } from './layout/layout.component';

// Enable Angular production mode when webpack builds in production mode.
// This disables dev-only assertion checks (NG0100, "Should be run in update mode").
if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

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
    console.info('Angular bootstrap complete');
}).catch(err => {
    console.error('Angular bootstrap error:', err);
});
