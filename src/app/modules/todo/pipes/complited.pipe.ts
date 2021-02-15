import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'complited',
})
export class ComplitedPipe implements PipeTransform {
  transform(value: string): string {
    return `I'm completed: - ${value}`;
  }
}
