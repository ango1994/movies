import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year',
  standalone: true,
})
export class YearPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0, 4);
  }
}
