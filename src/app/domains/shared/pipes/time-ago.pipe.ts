import { Pipe, PipeTransform } from '@angular/core';
import{ formatDistance} from 'date-fns';


@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  /*transform(dateSent: string ): string {
    let currentDate = new Date();
    let dateSenta = new Date(dateSent);
  return String(Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSenta.getFullYear(), dateSenta.getMonth(), dateSenta.getDate()) ) /(1000 * 60 * 60 * 24))) ;
  }*/

  transform(value: string ): string {
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today,date);
  }

}
