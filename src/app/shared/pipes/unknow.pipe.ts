import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknow'
})
export class UnknowPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let valueLowerCase = value.toLowerCase();

    if(valueLowerCase == 'unknown' || valueLowerCase == '?') {
      return '?'
    }

    return value;
  }

}
