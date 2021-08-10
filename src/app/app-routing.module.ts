import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ColaboradorCreateComponent } from "./components/views/colaborador/colaborador-create/colaborador-create.component";
import { ColaboradorDeleteComponent } from "./components/views/colaborador/colaborador-delete/colaborador-delete.component";
import { ColaboradorReadComponent } from "./components/views/colaborador/colaborador-read/colaborador-read.component";
import { ColaboradorTesteComponent } from "./components/views/colaborador/colaborador-teste/colaborador-teste.component";
import { ColaboradorUpdateComponent } from "./components/views/colaborador/colaborador-update/colaborador-update.component";
import { HomeComponent } from "./components/views/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "colaboradores",
    component: ColaboradorReadComponent,
  },
  {
    path: "colaboradores/create",
    component: ColaboradorCreateComponent,
  },
  {
    path: "colaboradores/delete/:id",
    component: ColaboradorDeleteComponent,
  },
  {
    path: "colaboradores/update/:id",
    component: ColaboradorUpdateComponent
  },
  {
    path: "colaboradores/teste",
    component: ColaboradorTesteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
