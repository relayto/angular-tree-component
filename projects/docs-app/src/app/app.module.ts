import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { TreeModule } from 'angular-tree-component';
import { LayoutModule } from './layout/layout.module';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { CustomElementsModule } from './custom-elements/custom-elements.module';
import { CodeExampleModule } from './custom-elements/code/code-example.module';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule,
    TreeModule,
    LayoutModule,
    CustomElementsModule,
    CodeExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
