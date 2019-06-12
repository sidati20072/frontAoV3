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
import { ListOffresPublicComponent } from './frontPublic/offres/list-offres-public/list-offres-public.component';
import { ShowOffrePublicComponent } from './frontPublic/offres/show-offre-public/show-offre-public.component';
import { AccountComponent } from './frontPublic/account/account.component';
import { ProfilPublicComponent } from './frontPublic/profil-public/profil-public.component';
import { AlertsPublicComponent } from './frontPublic/alerts-public/alerts-public.component';
import { DemandesPublicComponent } from './frontPublic/demandes-public/demandes-public.component';
import { FavorisPublicComponent } from './frontPublic/favoris-public/favoris-public.component';
import { SignupComponent } from './frontPublic/signup/signup.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { SuperLayoutComponent } from './_layout/super-layout/super-layout.component';
import {AccueilPriveComponent} from './frontPrive/accueil/accueil.component';
import { NavbarPriveComponent } from './frontPrive/navbar-prive/navbar-prive.component';
import { SidebarPriveComponent } from './frontPrive/sidebar-prive/sidebar-prive.component';
import { FooterPriveComponent } from './frontPrive/footer-prive/footer-prive.component';
import { ShowEntrepriseComponent } from './frontPrive/entreprise/show-entreprise/show-entreprise.component';
import { ListEntrepriseComponent } from './frontPrive/entreprise/list-entreprise/list-entreprise.component';
import { CreateModuleComponent } from './frontPrive/modules/create-module/create-module.component';
import { ListModulesComponent } from './frontPrive/modules/list-modules/list-modules.component';
import { EditModuleComponent } from './frontPrive/modules/edit-module/edit-module.component';
import { ListFacturesComponent } from './frontPrive/factures/list-factures/list-factures.component';
import { EditParametreComponent } from './frontPrive/parametres/edit-parametre/edit-parametre.component';
import { CreatePlanComponent } from './frontPrive/plans/create-plan/create-plan.component';
import { ListPlansComponent } from './frontPrive/plans/list-plans/list-plans.component';
import { EditPlansComponent } from './frontPrive/plans/edit-plans/edit-plans.component';
import { AbonnementComponent } from './frontEntreprise/abonnement/abonnement.component';
import {NgxEditorModule} from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

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
        SearchBarComponent,
        ListOffresPublicComponent,
        ShowOffrePublicComponent,
        AccountComponent,
        ProfilPublicComponent,
        AlertsPublicComponent,
        DemandesPublicComponent,
        FavorisPublicComponent,
        SignupComponent,
        SuperLayoutComponent,
        AccueilPriveComponent,
        NavbarPriveComponent,
        SidebarPriveComponent,
        FooterPriveComponent,
        ShowEntrepriseComponent,
        ListEntrepriseComponent,
        CreateModuleComponent,
        ListModulesComponent,
        EditModuleComponent,
        ListFacturesComponent,
        EditParametreComponent,
        CreatePlanComponent,
        ListPlansComponent,
        EditPlansComponent,
        AbonnementComponent

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
        SlimLoadingBarModule.forRoot(),
        NgxUiLoaderModule,
        NgxSmartModalModule.forRoot(),
        NgxEditorModule,
        TooltipModule




    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
