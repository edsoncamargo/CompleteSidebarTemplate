import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './pages/docs/sidebar/sidebar.component';
import { NavbarComponent } from './pages/docs/navbar/navbar.component';
import { AccordionComponent } from './pages/docs/accordion/accordion.component';

const routes: Routes = [
  { path: '', redirectTo: '/doc/sidebar', pathMatch: 'full' },
  { path: 'doc/sidebar', component: SidebarComponent },
  { path: 'doc/navbar', component: NavbarComponent },
  { path: 'doc/accordion', component: AccordionComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ]
})

export class AppRoutingModule { }
