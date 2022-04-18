import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginGuard} from "../../shared/guards";
import {AuthComponent} from "./auth.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./routes/login/login.component";
import {RegisterComponent} from "./routes/register/register.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    canActivate: [LoginGuard],
    children: [
      {path: "", redirectTo: "login", pathMatch: "full"},
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

