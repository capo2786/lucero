import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatInputModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule, MatPaginatorModule, MatSortModule, MatDialogModule} from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import { LuceroysushowComponent } from './luceroysushow/luceroysushow.component';
import { RepertorioComponent } from './repertorio/repertorio.component';
import { VideosComponent } from './videos/videos.component';
import { MasartistasComponent } from './masartistas/masartistas.component';
import { MasserviciosComponent } from './masservicios/masservicios.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ReservasComponent } from './reservas/reservas.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioService } from './services/formulario.service';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

const routes: Routes = [
{ path:'', redirectTo: '/inicio', pathMatch: 'full'},
{ path:'inicio', component: InicioComponent},
{ path:'luceroysushow', component: LuceroysushowComponent},
{ path:'repertorio', component: RepertorioComponent},
{ path:'videos', component: VideosComponent},
{ path:'masartistas', component: MasartistasComponent},
{ path:'masservicios', component: MasserviciosComponent},
{ path:'Reservas', component: ReservasComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    LuceroysushowComponent,
    RepertorioComponent,
    VideosComponent,
    MasartistasComponent,
    MasserviciosComponent,
    ReservasComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
   MatGridListModule,
   NgxMaterialTimepickerModule,
  
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [FormularioService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
