import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {getItemStore} from "../helpers/storage";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public setLanguage$ = new Subject<string>();
  public language: string = getItemStore('lng') || 'en';

  constructor() {
  }

}

