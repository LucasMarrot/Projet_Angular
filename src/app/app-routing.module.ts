import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaudiereCatalogueComponent } from './components/chaudieres/chaudiere-catalogue/chaudiere-catalogue.component';

const routes: Routes = [
    { path: 'catalogue-chaudieres', component: ChaudiereCatalogueComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
