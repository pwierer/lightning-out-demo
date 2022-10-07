import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightningOutDemoComponent } from './lightning-out-demo/lightning-out-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LightningOutDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
