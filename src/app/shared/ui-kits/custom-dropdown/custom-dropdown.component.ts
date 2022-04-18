import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "custom-dropdown-component",
  templateUrl: `./custom-dropdown.component.html`,
  styleUrls: ["./custom-dropdown.component.scss"]
})
export class CustomDropdownComponent implements OnInit {

  @Input("data") public items = [];
  @Input() public mainClassName = "";
  @Input("defaultTitle") public defaultTitle: string = "";
  @Input("keyName") public keyName: string = "";
  @Input("showSearch") public showSearch: boolean = true;

  @Output() public itemSelected: EventEmitter<any> = new EventEmitter();

  @Input("selectedItem") public selectedItem: any;

  public showMenuItems = false;
  public searchText: string = "";

  constructor() {
  }

  public ngOnInit(): void {
  }

  public toggleDropdown(event): void {
    this.showMenuItems = !this.showMenuItems;
  }

  public selectItem(currentItem: any): void {
    this.showMenuItems = false;
    this.items.filter((item) => {
        if (currentItem != item) item.isSelected = false;
      }
    );

    currentItem.isSelected = !currentItem.isSelected;

    this.selectedItem = currentItem.isSelected ? currentItem : null;

    this.itemSelected.emit({
      id: currentItem.isSelected ? currentItem.id : 0,
      [this.keyName]: currentItem[this.keyName]
    });
  }

  public onCLickOutside(): void {
    this.showMenuItems = false;
  }

}
