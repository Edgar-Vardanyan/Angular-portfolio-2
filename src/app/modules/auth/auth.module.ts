import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./routes/login/login.component";
import {RegisterComponent} from "./routes/register/register.component";
import {CustomDropdownModule, MultiSelectDropdownModule} from "../../shared/ui-kits";
import {ClickOutsideModule} from "../../shared/directives/click-outside.directive";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CustomDropdownModule,
    ClickOutsideModule,
    MultiSelectDropdownModule,
    TranslateModule,
  ]
})
export class AuthModule {
}
