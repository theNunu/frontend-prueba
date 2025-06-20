import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'cinema-maintenance',
        loadChildren: () => import('./modules/cinema-maintenance/cinema-maintenance.module')
            .then(m => m.CinemaMaintenanceModule)
    },
    {
        path: 'room-maintenance',
        loadChildren: () => import('./modules/room-maintenance/room-maintenance.module')
            .then(m => m.RoomMaintenanceModule)
    },
    {
        path: 'cinema-room-maintenance',
        loadChildren: () => import('./modules/cinema-room-maintenance/cinema-room-maintenance.module')
            .then(m => m.CinemaRoomMaintenanceModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module')
            .then(m => m.AuthModule)
    }

];
