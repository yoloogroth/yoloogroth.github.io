import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCvComponent } from './src/app/components/header-cv/header-cv.component';
import { WorkExperienceCvComponent } from './src/app/components/work-experience-cv/work-experience-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCvComponent,
    WorkExperienceCvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
