import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaudiereCatalogueComponent } from './components/chaudieres/chaudiere-catalogue/chaudiere-catalogue.component';
import { InterventionCatalogueComponent } from './components/interventions/intervention-catalogue/intervention-catalogue.component';
import { NewInterventionFormComponent } from './components/interventions/new-intervention-form/new-intervention-form.component';

const routes: Routes = [
    { path: 'chaudieres', component: ChaudiereCatalogueComponent },
    {
        path: 'interventions',
        component: InterventionCatalogueComponent,
    },
    {
        path: 'interventions/new',
        component: NewInterventionFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
