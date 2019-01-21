import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from '../service/guard/auth-guard';

const routes: Routes = [
  {
    path: '', component: TabsPage, children: [
      {
        path: 'main', children: [
          { path: '', loadChildren: '../main/main.module#MainPageModule' }
        ]
      },
      {
        path: 'list', canActivateChild: [AuthGuard], children: [
          { path: '', loadChildren: '../list/list.module#ListPageModule' }
        ]
      },
      {
        path: 'add', canActivateChild: [AuthGuard], children: [
          { path: '', loadChildren: '../add-alarm/add-alarm.module#AddAlarmModule' }
        ]
      },
      { path: '**', redirectTo: '/tabs/main', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
