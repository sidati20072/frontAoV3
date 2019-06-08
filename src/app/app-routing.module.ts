import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
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
import {UserComponent} from './users/user/user.component';
import {LoginComponent} from './users/login/login.component';
import {AdminLayoutComponent} from './_layout/admin-layout/admin-layout.component';
import {UserLayoutComponent} from './_layout/user-layout/user-layout.component';
import {AccueilComponent} from './frontPublic/accueil/accueil.component';
import {CreateEntrepriseComponent} from './frontPublic/create-entreprise/create-entreprise.component';
import {CreateOffreComponent} from './frontEntreprise/offres/create-offre/create-offre.component';
import {CompteComponent} from './frontEntreprise/compte/compte.component';
import {ProfileComponent} from './frontEntreprise/profile/profile.component';
import {EntrepriseComponent} from './frontEntreprise/entreprise/entreprise.component';
import {ListOffreComponent} from './frontEntreprise/offres/list-offre/list-offre.component';
import {ShowOffreComponent} from './frontEntreprise/offres/show-offre/show-offre.component';
import {ListOffresPublicComponent} from './frontPublic/offres/list-offres-public/list-offres-public.component';
import {ShowOffrePublicComponent} from './frontPublic/offres/show-offre-public/show-offre-public.component';
import {AccountComponent} from './frontPublic/account/account.component';
import {ProfilPublicComponent} from './frontPublic/profil-public/profil-public.component';
import {FavorisPublicComponent} from './frontPublic/favoris-public/favoris-public.component';
import {DemandesPublicComponent} from './frontPublic/demandes-public/demandes-public.component';
import {SignupComponent} from './frontPublic/signup/signup.component';
import {SuperLayoutComponent} from './_layout/super-layout/super-layout.component';
import {AccueilPriveComponent} from './frontPrive/accueil/accueil.component';
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
import {AbonnementComponent} from './frontEntreprise/abonnement/abonnement.component';

const routes: Routes = [

  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UserComponent },
      //   { path: 'compte', component: CompteComponent },
      { path: 'offres/create', component: CreateOffreComponent },
      { path: 'offres', component: ListOffreComponent },
      { path: 'offres/show', component:  ShowOffreComponent},
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'entreprise/:id', component: EntrepriseComponent },
      { path: 'abonnement', component: AbonnementComponent },

      { path: 'forms', component: FormsComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'accordions', component: AccordionsComponent },
      { path: 'badges', component: BadgesComponent },
      { path: 'progressbar', component: ProgressbarComponent },
      { path: 'breadcrumbs', component: BreadcrumbsComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'dropdowns', component: DropdownComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'tabs', component: TabsComponent },
    ]
  },

  // App routes goes here here
  {
    path: 'public',
    component: UserLayoutComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'entreprise', component: CreateEntrepriseComponent },
      { path: 'offres', component: ListOffresPublicComponent },
      { path: 'offres/show/:id', component: ShowOffrePublicComponent },
      { path: 'signup', component: SignupComponent },
      //{ path: 'account', component: AccountComponent },


    ]
  },

  {
    path: 'super',
    component: SuperLayoutComponent,
    children: [
      { path: 'accueil', component: AccueilPriveComponent },
      { path: 'modules', component: ListModulesComponent },
      { path: 'modules/create', component: CreateModuleComponent },
      { path: 'modules/edit', component: EditModuleComponent },
      { path: 'factures', component: ListFacturesComponent },
      { path: 'entreprises', component: ListFacturesComponent },
      { path: 'entreprises/show', component: ShowEntrepriseComponent },
      { path: 'parametres', component: EditParametreComponent },
      { path: 'plans', component: ListPlansComponent  },
      { path: 'plans/create', component: CreatePlanComponent  },
      { path: 'plans/edit', component: EditPlansComponent },

    ]
  },
 {
    path: 'public/account',
    component: AccountComponent,
    children: [
      { path: 'profile', component: ProfilPublicComponent },
      { path: 'favoris', component: FavorisPublicComponent },
      { path: 'demandes', component: DemandesPublicComponent },
      { path: 'alerts', component: AlertsComponent },
    ]
  },

  { path: 'login', component: LoginComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
