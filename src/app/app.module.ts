import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './counters/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { OnePieceModule } from './one-piece/one-piece.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    OnePieceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
