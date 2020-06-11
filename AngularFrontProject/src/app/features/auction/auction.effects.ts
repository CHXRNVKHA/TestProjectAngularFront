import {Injectable} from '@angular/core';
import {AuctionService} from './auction.service';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {
  ActionTypes, ToggleAuctionAction,
  CreateAuctionAction, CreateAuctionFailureAction,
  CreateAuctionSuccessAction,
  GetAuctionListAction,
  GetAuctionListFailureAction,
  GetAuctionListSuccessAction, ToggleAuctionSuccessAction, ToggleAuctionFailureAction
} from './auction.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Auction} from '../../_interfaces/auction.interface';
import {of} from 'rxjs';


@Injectable()
export class AuctionEffects {
  constructor(
    private actions$: Actions, 
    private auctionService: AuctionService,
    ) {
  }


  @Effect()
    getAuctions$ = this.actions$.pipe( 
      ofType(ActionTypes.GET_AUCTION_LIST), 
      switchMap(() => this.auctionService.getAuctions()),
      map((auctions: Auction[]) => new GetAuctionListSuccessAction(auctions)), 
      catchError((err) => of(new GetAuctionListFailureAction())) 
    );

  @Effect()
  createAuction$ = this.actions$.pipe(
    ofType<CreateAuctionAction>(ActionTypes.CREATE_AUCTION), 
    switchMap((action: CreateAuctionAction) => this.auctionService.createAuction(action.payload)),
    map((auction: Auction) => new CreateAuctionSuccessAction(auction)),
    catchError((err) => of(new CreateAuctionFailureAction(err)))
  );

  @Effect()
  toggleAuction$ = this.actions$.pipe(
    ofType<ToggleAuctionAction>(ActionTypes.TOGGLE_AUCTION),
    switchMap((action: ToggleAuctionAction) => this.auctionService.toggleAuction(action.payload)),
    map((auction: Auction) => new ToggleAuctionSuccessAction(auction)),
    catchError((err) => of(new ToggleAuctionFailureAction(err)))
  );

}
