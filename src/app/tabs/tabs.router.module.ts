import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from '../service/guard/auth-guard';
import { MainPage } from '../main/main.page';
import { ListPage } from '../list/list.page';
import { AddAlarmPage } from '../add-alarm/add-alarm.page';

const routes: Routes = [
  {
    path: '', component: TabsPage, children: [
      {
        path: 'main', children: [
          { path: '', component: MainPage }
        ]
      },
      {
        path: 'list', canActivateChild: [AuthGuard], children: [
          { path: '', component: ListPage }
        ]
      },
      {
        path: 'add', canActivateChild: [AuthGuard], children: [
          { path: '', component: AddAlarmPage }
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
