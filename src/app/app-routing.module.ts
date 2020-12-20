import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent} from './main-menu/main-menu.component';
import { OrderMgrComponent } from './order/order-mgr/order-mgr.component';
import { TransMgrComponent} from './transfer/trans-mgr/trans-mgr.component';
import { PkgMgrComponent} from './package/pkg-mgr/pkg-mgr.component';
import { ReportComponent} from './report/report.component';

const routes: Routes = [
  {path: '', redirectTo: 'mainMenu', pathMatch: 'full' },
  {path : 'mainMenu', component : MainMenuComponent},
  {path : 'orderMgr', component : OrderMgrComponent},
  {path : 'transMgr', component : TransMgrComponent},
  {path : 'pkgMgr', component : PkgMgrComponent},
  {path : 'report', component : ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
