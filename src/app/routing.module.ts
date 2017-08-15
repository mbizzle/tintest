import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedViewComponent } from './feed-view/feed-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',  component: FeedViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
