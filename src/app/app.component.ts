import {Component, OnInit} from "@angular/core";
import {SettingsService, TranslationService} from "./shared/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  public languages = [
    {key: "en", value: "Eng"},
    {key: "arm", value: "Հայ"},
    {key: "ru", value: "Рус"},
  ];

  constructor(
    public settingsService: SettingsService,
    private translationService: TranslationService
  ) {
  }

  public ngOnInit(): void {
    this.translationService.setLanguage(this.settingsService.language);
  }

  public onSelectLgn(lgn: string): void {
    this.translationService.setLanguage(lgn);
  }

}




