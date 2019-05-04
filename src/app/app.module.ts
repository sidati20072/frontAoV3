import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { UserComponent } from './users/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './users/login/login.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './_layout/user-layout/user-layout.component';
import { AccueilComponent } from './frontPublic/accueil/accueil.component';
import { CreateEntrepriseComponent } from './frontPublic/create-entreprise/create-entreprise.component';
import { NavbarPublicComponent } from './frontPublic/navbar-public/navbar-public.component';
import { FooterPublicComponent } from './frontPublic/footer-public/footer-public.component';
import { CreateOffreComponent } from './frontEntreprise/offres/create-offre/create-offre.component';
import { CompteComponent } from './frontEntreprise/compte/compte.component';
import { ProfileComponent } from './frontEntreprise/profile/profile.component';
import { EntrepriseComponent } from './frontEntreprise/entreprise/entreprise.component';
import { ListOffreComponent } from './frontEntreprise/offres/list-offre/list-offre.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MaterialModule} from './Material';
import { ShowOffreComponent} from './frontEntreprise/offres/show-offre/show-offre.component';
import { ShowDemandeComponent } from './frontEntreprise/show-demande/show-demande.component';
import { SearchBarComponent } from './frontPublic/search-bar/search-bar.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
        DashboardComponent,
        FormsComponent,
        ButtonsComponent,
        TablesComponent,
        TypographyComponent,
        IconsComponent,
        AlertsComponent,
        AccordionsComponent,
        BadgesComponent,
        ProgressbarComponent,
        BreadcrumbsComponent,
        PaginationComponent,
        DropdownComponent,
        TooltipsComponent,
        CarouselComponent,
        TabsComponent,
        UserComponent,
        LoginComponent,
        AdminLayoutComponent,
        UserLayoutComponent,
        AccueilComponent,
        CreateEntrepriseComponent,
        NavbarPublicComponent,
        FooterPublicComponent,
        CreateOffreComponent,
        CompteComponent,
        ProfileComponent,
        EntrepriseComponent,
        ListOffreComponent,
        ShowOffreComponent,
        ShowDemandeComponent,
        SearchBarComponent

    ],
    entryComponents: [
        ShowDemandeComponent
    ],

    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MaterialModule,
        MatSnackBarModule,

    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
