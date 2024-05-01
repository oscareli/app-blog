import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SiteTitleComponent } from './components/site-title/site-title.component';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailedPostComponent } from './components/detailed-post/detailed-post.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HomeComponent,
    SiteTitleComponent,
    PostComponent,
    FooterComponent,
    DetailedPostComponent,
    SocialMediasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
