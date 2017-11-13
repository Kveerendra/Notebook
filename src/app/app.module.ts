import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LinkComponent } from './components/link/link.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LinksPageComponent } from './pages/links-page/links-page.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { ContactsPageComponent } from './Pages/contacts-page/contacts-page.component';

import { ContactsService } from './services/contacts.service';
import { LinkService } from './services/link.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    ContactComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    LinksPageComponent,
    ErrorPageComponent,
    ContactsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ContactsService, LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }