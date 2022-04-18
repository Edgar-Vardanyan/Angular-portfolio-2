import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-multi-select-dropdown",
  templateUrl: "./multi-select-dropdown.component.html",
  styleUrls: ["./multi-select-dropdown.component.scss"]
})
export class MultiSelectDropdownComponent implements OnInit {

  @Input("formControlName") public formControlName = "";
  @Input("defaultText") public defaultText: string = "";
  @Input("data") public list: any[] = [];
  @Input("showSearch") public showSearch = true;
  @Output() public shareCheckedList = new EventEmitter();
  @Output() public shareIndividualCheckedList = new EventEmitter();

  public searchText = "";
  public checkedList: any[] = [];
  public currentSelected: {} = {};
  public showDropDown = false;

  constructor() {
    this.checkedList = [];
  }

  public ngOnInit(): void {
  }

  public getSelectedValue(status: Boolean, value: String): void {
    if (status) {
      this.checkedList.push(value);
    } else {
      let index = this.checkedList.indexOf(value);
      this.checkedList.splice(index, 1);
    }

    this.currentSelected = {checked: status, name: value};

    this.shareCheckedlist();

    this.shareIndividualStatus();
  }

  public shareCheckedlist(): void {
    this.shareCheckedList.emit(this.checkedList);
  }

  public shareIndividualStatus(): void {
    this.shareIndividualCheckedList.emit(this.currentSelected);
  }


  public onCLickOutside(): void {
    this.showDropDown = false;
  }

}
