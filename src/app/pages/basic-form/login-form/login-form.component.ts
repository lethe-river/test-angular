import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd";
import {CommonService} from "../../../../assets/common/common.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  validateForm: FormGroup;

  //创建表单 另一种写法
  // validateForm = new FormGroup({
  //   userName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  //   password: new FormControl(null, [Validators.required]),
  // })

  constructor(private fb: FormBuilder, private message: NzMessageService, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(6), this.passwordValidator(/^[A-Za-z0-9_]*$/)]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (!this.validateForm.valid) {
      this.message.error('请完善信息');
      this.commonService.openDirtyControl(this.validateForm);
    }
    // console.log(this.validateForm.controls.userName.value)  获取字段值
    console.log(this.validateForm.get('userName').value)
  }


  get userName() {
    return this.validateForm.controls.userName;
  }

  get password() {
    return this.validateForm.controls.password;
  }

  //表单验证
  get userNameTip() {
    if (this.userName.invalid && (this.userName.dirty || this.userName.touched)) {
      if (this.userName.errors.required) {
        return '请输入用户名!';
      } else if (this.userName.errors.minlength) {
        return '用户名最少三位!';
      }
    }
  }

  get passwordTip() {
    if (this.password.invalid && (this.password.dirty || this.password.touched)) {
      if (this.password.errors.required) {
        return '请输入密码!';
      } else if (this.password.errors.minlength) {
        return '密码最少六位!';
      } else if (this.password.errors.passwordValidator) {
        //passwordValidator为函数返回值名称
        return '只能包含字母数字下划线!';
      }
    }
  }

  //自定义表单验证输入
  passwordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      //正则判断输入字符是否有字母数字下划线之外的元素
      const forbidden = nameRe.test(control.value);
      return !forbidden ? {'passwordValidator': {value: control.value}} : null;
    };
  }

}
