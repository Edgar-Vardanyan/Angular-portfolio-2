import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FilterPipeModule} from "../../pipes";
import {CustomDropdownComponent} from "./custom-dropdown.component";
import {ClickOutsideModule} from "../../directives/click-outside.directive";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    CustomDropdownComponent
  ],
  imports: [
    CommonModule,
    FilterPipeModule,
    FormsModule,
    ClickOutsideModule,
    TranslateModule
  ],
  exports: [
    CustomDropdownComponent
  ]
})
export class CustomDropdownModule {
}
