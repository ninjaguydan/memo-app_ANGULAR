import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastDue'
})
export class PastDuePipe implements PipeTransform {

  transform(date:Date, ...args: unknown[]):string {
    let now = new Date().getTime()
    return now > date.getTime() && !args[0] && !args[1] ? 'past-due' : ''
  }

}
