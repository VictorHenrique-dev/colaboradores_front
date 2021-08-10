import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from './components/views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ColaboradorReadComponent } from './components/views/colaborador/colaborador-read/colaborador-read.component';
import { MatButtonModule } from '@angular/material/button';
import { ColaboradorCreateComponent } from './components/views/colaborador/colaborador-create/colaborador-create.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ColaboradorDeleteComponent } from './components/views/colaborador/colaborador-delete/colaborador-delete.component';
import { ColaboradorUpdateComponent } from './components/views/colaborador/colaborador-update/colaborador-update.component';
import { ColaboradorTesteComponent } from './components/views/colaborador/colaborador-teste/colaborador-teste.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './components/search.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent, ColaboradorReadComponent, ColaboradorCreateComponent, ColaboradorDeleteComponent, ColaboradorUpdateComponent, ColaboradorTesteComponent, SearchPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
