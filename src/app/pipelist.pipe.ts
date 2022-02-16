import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelist'
})
export class PipelistPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
