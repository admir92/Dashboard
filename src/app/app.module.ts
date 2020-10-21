import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { OrganizationComponent } from './organization/organization.component';
import { RegistriComponent } from './registri/registri.component';
import { ApprovazioniComponent } from './approvazioni/approvazioni.component';
import { ImpattoComponent } from './impatto/impatto.component';
import { InformativeComponent } from './informative/informative.component';
import { ViolazioniComponent } from './violazioni/violazioni.component';
import { CataloghiComponent } from './cataloghi/cataloghi.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashComponent},
  { path: 'organization', component: OrganizationComponent},
  { path: 'registri', component: RegistriComponent},
  { path: 'approvazioni', component: ApprovazioniComponent},
  { path: 'impatto', component: ImpattoComponent},
  { path: 'informative', component: InformativeComponent},
  { path: 'violazioni', component: ViolazioniComponent},
  { path: 'cataloghi', component: CataloghiComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    DashComponent,
    OrganizationComponent,
    ApprovazioniComponent,
    InformativeComponent,
    ViolazioniComponent,
    CataloghiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
