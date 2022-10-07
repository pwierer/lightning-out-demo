import { Component, OnInit } from '@angular/core';

declare var $Lightning: any;

@Component({
  selector: 'app-lightning-out-demo',
  templateUrl: './lightning-out-demo.component.html',
  styleUrls: ['./lightning-out-demo.component.css']
})
export class LightningOutDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initLightningOut();
  }

  initLightningOut() {
    $Lightning.use('c:LightningOutContainer',
      function() {
        $Lightning.createComponent(
          'c:basicComponent',
          {},
          document.querySelector('#basic'),
          function(cmp: any) {

          }
        );
        $Lightning.createComponent(
          'c:editAccountForm',
          {},
          document.querySelector('#account-form'),
          function(cmp: any) {

          }
        );
      },
      'https://platform-speed-3889-dev-ed.my.site.com/demo' // Site endpoint
    );
  }

}
