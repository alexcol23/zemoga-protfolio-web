import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {TweetsComponent} from './pages/tweets/tweets.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent ,
        ProfileComponent ,
        NavbarComponent ,
        FooterComponent ,
        TweetsComponent
    ] ,
  imports: [
    BrowserModule ,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule
  ] ,
    providers: [] ,
    bootstrap: [AppComponent]
})
export class AppModule {
}
