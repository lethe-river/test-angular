import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})
export class PricePipe implements PipeTransform {
  transform(value: number){
    return value + '￥';
  }

}

@Pipe({
  name: 'storePipe'
})
export class StorePipe implements PipeTransform {

  transform(value: number) {
    return value + '个';
  }

}
