import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { GradeFormComponent } from './panel/grade-form/grade-form.component';
import { GradeListComponent } from './panel/grade-list/grade-list.component';
import { GradeItemComponent } from './panel/grade-list/grade-item/grade-item.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    GradeFormComponent,
    GradeListComponent,
    GradeItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
