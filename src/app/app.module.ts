import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { HeaderComponent } from './header/header.component';

/**
 * routing
 */
const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    SlideMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
