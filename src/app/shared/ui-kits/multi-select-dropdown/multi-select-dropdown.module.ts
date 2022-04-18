import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MultiSelectDropdownComponent} from "./multi-select-dropdown.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipeModule} from "../../pipes";
import {TranslateModule} from "@ngx-translate/core";
import {ClickOutsideModule} from "../../directives/click-outside.directive";


@NgModule({
  declarations: [
    MultiSelectDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule,
    TranslateModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  exports: [
    MultiSelectDropdownComponent
  ]
})
export class MultiSelectDropdownModule {
}
