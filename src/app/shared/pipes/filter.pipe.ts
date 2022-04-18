import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value, filterText: string) {
    const filteredArr: { content: string; completed: boolean; }[] = [];

    if (filterText === '') {
      return value;
    }

    for (let todo of value) {
      if (todo.name.toLowerCase().startsWith(filterText.toLowerCase())) {
        filteredArr.push(todo);
      }
    }

    return filteredArr;
  }

}

@NgModule({
  declarations: [FilterPipe],
  exports: [FilterPipe]
})
export class FilterPipeModule {
}
