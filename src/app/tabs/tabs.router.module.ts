import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs', component: TabsPage, children: [
      {
        path: 'main', children: [
          { path: '', loadChildren: '../main/main.module#MainPageModule' }
        ]
      },
      {
        path: 'list', children: [
          { path: '', loadChildren: '../list/list.module#ListPageModule' }
        ]
      },
      {
        path: 'add', children: [
          { path: '', loadChildren: '../add-alarm/add-alarm.module#AddAlarmModule' }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '/tabs/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
