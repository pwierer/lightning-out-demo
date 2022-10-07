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
    $Lightning.use("c:LightningOutContainer", // name of the Lightning app
      function() { // Callback once framework and app loaded
        $Lightning.createComponent(
          "c:basicComponent", // top-level component of your app
          {}, // attributes to set on the component when created
          document.querySelector('#lightningLocator'), // the DOM location to insert the component
          function(cmp: any) { // callback when component is created and active on the page

          }
        );
      },
      'https://platform-speed-3889-dev-ed.my.site.com/demo' // Site endpoint
    );
  }

}
