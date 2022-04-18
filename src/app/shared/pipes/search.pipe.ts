import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(items: string[], searchText: string) {

    if (searchText) {
      return items.filter((item: string) => {
        return item.toLowerCase().startsWith(searchText.toLowerCase())
      })
    }
    return items
  }

}

@NgModule({
  declarations: [SearchPipe],
  exports: [SearchPipe]
})
export class SearchPipeModule {
}
