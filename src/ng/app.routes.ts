import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'info',
        loadComponent: () => import(
            /* webpackChunkName: "page-info" */
            './pages/info.component'
        ).then(m => m.InfoComponent),
    },
    {
        path: 'settings',
        loadComponent: () => import(
            /* webpackChunkName: "page-settings" */
            './pages/settings.component'
        ).then(m => m.SettingsComponent),
    },
    {
        path: 'database',
        loadComponent: () => import(
            /* webpackChunkName: "page-main" */
            './pages/database/database.component'
        ).then(m => m.DatabaseComponent),
        children: [
            {
                path: 'statistics',
                loadComponent: () => import(
                    /* webpackChunkName: "page-statistics" */
                    './pages/database/statistics.component'
                ).then(m => m.StatisticsComponent),
            },
            {
                path: 'key/:key',
                loadComponent: () => import(
                    /* webpackChunkName: "page-main-key" */
                    './pages/database/database-key.component'
                ).then(m => m.DatabaseKeyComponent),
            },
            {
                path: '',
                redirectTo: 'statistics',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: 'search',
        loadComponent: () => import(
            /* webpackChunkName: "page-search" */
            './pages/search/search.component'
        ).then(m => m.SearchComponent),
    },
    {
        path: 'monitoring',
        loadComponent: () => import(
            /* webpackChunkName: "page-monitoring-shell" */
            './pages/monitoring/monitoring-shell.component'
        ).then(m => m.MonitoringShellComponent),
        children: [
            {
                path: '',
                loadComponent: () => import(
                    /* webpackChunkName: "page-monitoring" */
                    './pages/monitoring/monitoring.component'
                ).then(m => m.MonitoringComponent),
            },
            {
                path: 'profiler',
                loadComponent: () => import(
                    /* webpackChunkName: "page-profiler" */
                    './pages/profiler/profiler.component'
                ).then(m => m.ProfilerComponent),
            },
            {
                path: 'pubsub',
                loadComponent: () => import(
                    /* webpackChunkName: "page-pubsub" */
                    './pages/profiler/pubsub.component'
                ).then(m => m.PubsubComponent),
            },
            {
                path: 'analysis',
                loadComponent: () => import(
                    /* webpackChunkName: "page-memory-analysis" */
                    './pages/monitoring/memory-analysis.component'
                ).then(m => m.MemoryAnalysisComponent),
            },
        ],
    },
    {
        path: 'main',
        redirectTo: 'database',
        pathMatch: 'prefix',
    },
    {
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'settings',
    },
];
