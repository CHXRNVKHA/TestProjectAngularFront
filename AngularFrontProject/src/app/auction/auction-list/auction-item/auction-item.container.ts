import {Component, Input} from '@angular/core';
import {State} from '../../../features/auction/auction.reducers';
import {Store} from '@ngrx/store';
import {ToggleAuctionAction} from '../../../features/auction/auction.actions';
import {Auction} from '../../../_interfaces/auction.interface';

@Component({
  selector: 'app-auction-item',
  template: `<app-auction-item-component
    (toggleAuctionEvent)="toggleAuction($event)"
    [auction]="auction"
  ></app-auction-item-component>`
})
export class AuctionItemContainerComponent {
  @Input()
  auction: Auction;
  constructor(private store: Store<State>) {
  }

  toggleAuction(id: number) {
    this.store.dispatch(new ToggleAuctionAction(id));
  }
}
