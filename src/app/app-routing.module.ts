import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home", //redirectTo:"/login",
    pathMatch:"full"
  },
//  {
//    path:"login",
//    loadChildren: () => import('./modules/login/login.module').then(m=>m.LoginModule)
//  },
  {
    path: "home",
    loadChildren: () => import('./modules/home/home.module').then(m=>m.HomeModule)
  },
//  {
//    path: "medico",
//    loadChildren: () => import('./modules/medico/medico.module').then(m=>m.MedicoModule)
//  },  
  {
    path: "paciente",
    loadChildren: () => import('./modules/paciente/paciente.module').then(m=>m.PacienteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }