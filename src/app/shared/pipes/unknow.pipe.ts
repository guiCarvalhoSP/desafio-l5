import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknow'
})
export class UnknowPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toLowerCase() != 'unknow' ? '?' : value;
  }

}
