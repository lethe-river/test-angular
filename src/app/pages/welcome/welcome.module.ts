import {NgModule} from '@angular/core';

import {WelcomeRoutingModule} from './welcome-routing.module';

import {WelcomeComponent} from './welcome.component';
import {TestComponent} from '../test/test.component';
import {NzFormModule, NzIconModule, NzInputModule, NzWaveModule} from "ng-zorro-antd";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [WelcomeRoutingModule, NzFormModule, ReactiveFormsModule, NzInputModule, NzIconModule, CommonModule, NzWaveModule],
  declarations: [WelcomeComponent, TestComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}
