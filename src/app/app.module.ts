import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import {
  reducers,
  metaReducers,
  effects
} from './redux';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
