import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {CommonService} from "../assets/common/common.service";
import {NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule, NzMessageService} from "ng-zorro-antd";

//模块
import {BasicFormModule} from "./pages/basic-form/basic-form.module";
import {WelcomeModule} from './pages/welcome/welcome.module';
import {BasicTableModule} from "./pages/basic-table/basic-table.module";

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    WelcomeModule,
    BasicFormModule,
    BasicTableModule,
    NzCheckboxModule,
    NzButtonModule,
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, CommonService, NzMessageService],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
