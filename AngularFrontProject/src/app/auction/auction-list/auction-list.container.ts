import {Component, OnInit} from '@angular/core';
import {State} from '../../features/auction/auction.reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Auction} from '../../_interfaces/auction.interface';
import {selectAuctionList} from '../../features/auction/auction.selectors';
import {GetAuctionListAction} from '../../features/auction/auction.actions';

@Component({
  selector: 'app-auction-list',
  template: `<app-auction-list-component
    [auctions]="auctions$ | async"
  ></app-auction-list-component>`
})
export class AuctionListContainerComponent implements OnInit {
  public todos$: Observable<Auction[]> = this.store.pipe(select(selectAuctionList)); 

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAuctionListAction());
  }
}
