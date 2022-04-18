import {Injectable} from '@angular/core';
import {setItemStore} from '../helpers/storage';
import {SettingsService} from './settings.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(
    private translate: TranslateService,
    private settingsService: SettingsService
  ) {
    this.translate.use(this.settingsService.language);
  }

  public setLanguage(lng: string = null): void {
    this.translate.use(lng || this.settingsService.language);
    this.settingsService.language = lng;
    setItemStore<string>('lng', this.settingsService.language);
  }

}

