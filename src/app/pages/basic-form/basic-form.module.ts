import {NgModule} from '@angular/core';

import {NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule} from "ng-zorro-antd";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

//组件
import {BasicFormComponent} from "./basic-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from './register-form/register-form.component';


@NgModule({
  imports: [NzFormModule, ReactiveFormsModule, NzInputModule, CommonModule, NzButtonModule, NzCheckboxModule],
  declarations: [BasicFormComponent, LoginFormComponent, RegisterFormComponent],
  exports: [BasicFormComponent]
})
export class BasicFormModule {
}
