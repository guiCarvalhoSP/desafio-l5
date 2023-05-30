import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'season'
})
export class SeasonPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.toUpperCase().replace('S', 'T');;
  }

}
