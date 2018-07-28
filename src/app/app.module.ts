import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CoreModule } from './modules/core/core.module';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { NotFoundComponent } from './modules/shared/pages/not-found/not-found.component';
import { ExampleComponent } from './modules/shared/pages/example/example.component';

const routes: Routes = [
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: '',
    children: []
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
