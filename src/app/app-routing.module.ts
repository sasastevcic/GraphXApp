import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
const coreRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: 'cards', component: GraphicCardsComponent },
  { path: 'cards/:id', component: GraphicCardsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }