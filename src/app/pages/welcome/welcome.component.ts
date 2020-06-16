import {Component, OnInit} from '@angular/core';
import {UserSetService} from "../../../assets/ts/service/user-set.service";
import {CommonService} from "../../../assets/common/common.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  text: any;

  constructor(private userSetService: UserSetService, private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.dataList.subscribe(data => {
      console.log(data)
    })
    console.log(this.commonService.num);
  }

  getClick() {
    // this.text = this.userSetService.user;
    // console.log(this.text);
    // console.log(this.userSetService.test)
    this.commonService.dataList.subscribe(data => {
      console.log(data)
    })
  }

}
