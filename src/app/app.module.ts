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
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { HeaderComponent } from './components/base/header/header.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { ChaudiereCardComponent } from './components/chaudieres/chaudiere-card/chaudiere-card.component';
import { ChaudiereCatalogueComponent } from './components/chaudieres/chaudiere-catalogue/chaudiere-catalogue.component';
import { InterventionCatalogueComponent } from './components/interventions/intervention-catalogue/intervention-catalogue.component';
import { InterventionCardComponent } from './components/interventions/intervention-card/intervention-card.component';
import { NewInterventionFormComponent } from './components/interventions/new-intervention-form/new-intervention-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ChaudiereCardComponent,
        ChaudiereCatalogueComponent,
        InterventionCatalogueComponent,
        InterventionCardComponent,
        NewInterventionFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        MenubarModule,
        CardModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarModule,
        InputTextModule,
        InputNumberModule,
        HttpClientModule,
        TabViewModule,
        DividerModule,
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}
