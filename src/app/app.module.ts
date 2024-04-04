import { NgModule } from '@angular/core';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from './components/base/header/header.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { ChaudiereCardComponent } from './components/chaudieres/chaudiere-card/chaudiere-card.component';
import { ChaudiereCatalogueComponent } from './components/chaudieres/chaudiere-catalogue/chaudiere-catalogue.component';
import { InterventionCatalogueComponent } from './components/interventions/intervention-catalogue/intervention-catalogue.component';
import { InterventionCardComponent } from './components/interventions/intervention-card/intervention-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ChaudiereCardComponent,
        ChaudiereCatalogueComponent,
        InterventionCatalogueComponent,
        InterventionCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        MenubarModule,
        CardModule,
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}
