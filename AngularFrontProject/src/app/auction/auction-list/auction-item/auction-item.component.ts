import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Auction} from '../../../_interfaces/auction.interface';

@Component({
  selector: 'app-auction-item-component',
  templateUrl: './auction-item.component.html'
})
export class TodoItemComponent {
  @Input()
  auction: Auction;
  @Output()
  toggleAuctionEvent: EventEmitter<number> = new EventEmitter<number>();
  toggleAuction() {
    this.toggleAuctionEvent.emit(this.auction.id);
  }
}