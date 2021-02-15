import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pleasePipe',
})
export class PleasePipePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return `Please, ${value}`;
  }
}
