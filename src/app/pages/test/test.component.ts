import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {UserSetService} from "../../../assets/ts/service/user-set.service";
import {CommonService} from "../../../assets/common/common.service";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
})
export class TestComponent implements OnInit {
  obj: any;
  a: any;
  form: FormGroup;
  // user: User;
  testTip = 'Please input your username!';
  name: any;
  list = [
    {
      name: '张三',
      email: '123',
      age: '18'
    },
    {
      name: '李四',
      email: '456',
      age: '19'
    }
  ];
  num = 1;
  isShow: Boolean = false;
  validateForm = new FormGroup({
    userName: new FormControl(this.name, [Validators.required, Validators.minLength(5)]),
    password: new FormControl(null, [Validators.required]),
  })

  submitForm(): void {
    this.userName.markAsDirty()
    this.userName.updateValueAndValidity();
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
  }

  constructor(private fb: FormBuilder, private userSetService: UserSetService, private commonService: CommonService) {
    this.userSetService.setTest.subscribe(
      (value: any) => this.userSetService.onSetTest(value))
  }

  ngOnInit(): void {
    // list.forEach(item => {
    //   this.userSetService.setUser({
    //     name: item.name,
    //     email: item.email,
    //     age: item.age
    //   })
    // })
    // console.log(this.userSetService.user)
  }

  get userName() {
    return this.validateForm.controls.userName;
  }

  get password() {
    return this.validateForm.controls.password;
  }

  textClick() {
    this.a = {'userName': 'aaaaaaaaaaaaaaa', 'password': ''};
    this.validateForm.setValue(this.a); //给表单属性传值，类型要对应一致
    console.log(this.userSetService.user)
  }

  testClick() {
    // this.userSetService.setUser({
    //   name: '123',
    //   email: 'item.email',
    //   age: '19'
    // })

    // this.userSetService.setTest.emit({
    //     name: '123',
    //     email: 'item.email',
    //     age: '20'
    //   })
    this.num++;
    this.list.push({
      name: '123' + this.num,
      email: '123',
      age: 'age' + this.num
    })
    this.commonService.dataList.next(this.list);
    this.commonService.num = 110;
    // this.commonService.dataList.complete();
  }


  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): any => {
      this.testTip = control.value === 'aaaa' ? `forbiddenName:${control.value}` : null;
      return this.testTip;
    };
  }
}
