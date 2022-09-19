import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'authenticated', component: AuthenticatedComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
