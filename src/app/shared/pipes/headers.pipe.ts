import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'headers' })
export class HeadersPipe implements PipeTransform {
  transform(value, args: string[]): any {
    return Object.keys(value);
  }
}