import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /* { COMMON WAY
    path: 'path1',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { LAZYLOAD
    path: 'path2',
    loadChildren: '../modules/questionario/questionario.module#QuestionarioModule',
    canActivate: [AuthGuard]
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
