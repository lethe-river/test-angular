import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.less']
})
export class BasicTableComponent implements OnInit {
  listOfData = [
    {
      key: '1',
      shopName: '苹果',
      price: 4,
      store: 50
    },
    {
      key: '2',
      shopName: '桃子',
      price: 5,
      store: 30
    },
    {
      key: '3',
      shopName: '西瓜',
      price: 15,
      store: 20
    },
  ];
  headList: any = ['单号', '商品', '价格', '库存'];

  constructor() {
  }

  ngOnInit(): void {

  }

}
