import {NgModule} from '@angular/core';

import {NzButtonModule, NzCheckboxModule, NzDividerModule, NzFormModule, NzInputModule, NzTableModule} from "ng-zorro-antd";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

//组件
import {BasicTableComponent} from "./basic-table.component";
import {PricePipe, StorePipe} from "../../../assets/common/common.pipe";


@NgModule({
  imports: [NzFormModule, ReactiveFormsModule, NzInputModule, CommonModule, NzButtonModule, NzCheckboxModule, NzTableModule, NzDividerModule],
  declarations: [BasicTableComponent, PricePipe, StorePipe],
  exports: [BasicTableComponent, PricePipe,StorePipe]
})

export class BasicTableModule {
}
