import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if(value)
    {
      return 'vuela';
    }
    else{
      return 'no vuela';
    }
  }

}
