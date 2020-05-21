import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Auction} from '../../_interfaces/auction.interface';
import {AUCTION_MOCK_LIST} from '../../shared/mocks/auction-list.mock';
import * as R from 'ramda';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuctionService {


  constructor(private readonly httpClient: HttpClient) {
  }
  private mockAuctionList: Auction[] = AUCTION_MOCK_LIST;

  createAuction(text: string): Observable<Auction> {
    const auction: Auction = {
      id: (new Date()).getDate(),
      text,
      completed: false
    };
    this.mockAuctionList = this.mockAuctionList.concat(auction);
    return of(auction);
  }

  getAuctions(): Observable<Auction[]> {
    return of(this.mockAuctionList);
  }

  toggleAuction(id: number): Observable<Auction> {
    const auctionIndex = this.mockAuctionList.findIndex((auction: Auction) => auction.id === id);
    const updatedAuction: Auction = {
      ...this.mockAuctionList[auctionIndex],
      completed: !this.mockAuctionList[auctionIndex].completed
    };
    const newAuctionList = R.clone(this.mockAuctionList);
    newAuctionList[auctionIndex] = updatedAuction;
    return of(updatedAuction);
  }
}
