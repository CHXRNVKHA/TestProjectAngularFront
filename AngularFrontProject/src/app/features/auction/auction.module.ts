import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuctionService} from './auction.service';
import {AuctionEffects} from './auction.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuctionEffects]),
  ],
  providers: [AuctionService]
})
export class AuctionModule {
}