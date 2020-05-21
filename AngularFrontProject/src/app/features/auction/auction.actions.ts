import {Action} from '@ngrx/store';
import {Auction} from '../../_interfaces/auction.interface';


export const ActionTypes = {
  GET_AUCTION_LIST: '[auction] Get Auction List',
  GET_AUCTION_LIST_SUCCESS: '[auction] Get Auction List Success',
  GET_AUCTION_LIST_FAILURE: '[auction] Get Auction List Failure',
  CREATE_AUCTION: '[auction] Create Auction',
  CREATE_AUCTION_SUCCESS: '[auction] Create Auction Success',
  CREATE_AUCTION_FAILURE: '[auction] Create Auction Failure',
  TOGGLE_AUCTION: '[auction] Toggle Auction',
  TOGGLE_AUCTION_SUCCESS: '[auction] Toggle Auction Success',
  TOGGLE_AUCTION_FAILURE: '[auction] Toggle Auction Failure',
};


export class GetAuctionListAction implements Action {
  public type = ActionTypes.GET_AUCTION_LIST;

  constructor(public payload?: any) {
  }
}

export class GetAuctionListSuccessAction implements Action {
  public type = ActionTypes.GET_AUCTION_LIST_SUCCESS;

  constructor(public payload: Auction[]) {
  }
}

export class GetAuctionListFailureAction implements Action {
  public type = ActionTypes.GET_AUCTION_LIST_FAILURE;

  constructor(public payload?: any) {
  }
}

export class CreateAuctionAction implements Action {
  public type = ActionTypes.CREATE_AUCTION;

  constructor(public payload: string) {
  }
}

export class CreateAuctionSuccessAction implements Action {
  public type = ActionTypes.CREATE_AUCTION_SUCCESS;

  constructor(public payload: Auction) {
  }
}

export class CreateAuctionFailureAction implements Action {
  public type = ActionTypes.CREATE_AUCTION_FAILURE;

  constructor(public payload?: any) {
  }
}

export class ToggleAuctionAction implements Action {
  public type = ActionTypes.TOGGLE_AUCTION;

  constructor(public payload: number) {
  }
}

export class ToggleAuctionSuccessAction implements Action {
  public type = ActionTypes.TOGGLE_AUCTION_SUCCESS;

  constructor(public payload: Auction) {
  }
}

export class ToggleAuctionFailureAction implements Action {
  public type = ActionTypes.TOGGLE_AUCTION_FAILURE;

  constructor(public payload?: any) {
  }
}


export type Actions =
  GetAuctionListAction
  | GetAuctionListSuccessAction
  | GetAuctionListFailureAction
  | CreateAuctionAction
  | CreateAuctionSuccessAction
  | CreateAuctionFailureAction
  | ToggleAuctionAction
  | ToggleAuctionSuccessAction
  | ToggleAuctionFailureAction
  ;
