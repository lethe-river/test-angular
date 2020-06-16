import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  dataList: BehaviorSubject<Object> = new BehaviorSubject([]);
  num = 100;

  constructor() {
  }

  // 打开脏检验  校验表单
  openDirtyControl(data) {
    for (const i in data.controls) {
      data.controls[i].markAsDirty();
      data.controls[i].updateValueAndValidity();
    }
  }

  // 关闭脏校验
  closeDirtyControl(data) {
    for (const i in data.controls) {
      data.controls[i].clearValidators();
      data.controls[i].updateValueAndValidity();
    }
  }
}
