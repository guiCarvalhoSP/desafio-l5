import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTranslate',
})
export class StatusTranslatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let originalStatus = value.toLowerCase();

    switch (originalStatus) {
      case 'alive':
        return 'Vivo';
      case 'dead':
        return 'Morto';
      default:
        return '?'
    }
  }
}
