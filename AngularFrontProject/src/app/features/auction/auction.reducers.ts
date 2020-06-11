import {Auction} from '../../_interfaces/auction.interface';
import {Actions as actions, ActionTypes} from './auction.actions';
import * as R from 'ramda';

export interface State {
  auctionList: Auction[];
}

const initialState: State = {
  auctionList: []
};

export function reducer(state: State = initialState, action: actions) { 
  switch (action.type) {
    case ActionTypes.GET_AUCTION_LIST:
      return {
        ...state,
        auctionList: []
      };
    case ActionTypes.GET_AUCTION_LIST_SUCCESS:
      return {
        ...state,
        auctionList: action.payload
      };
    case ActionTypes.GET_AUCTION_LIST_FAILURE:
      return {
        ...state,
        auctionList: []
      };
    case ActionTypes.CREATE_AUCTION_SUCCESS:
      return {
        ...state,
        auctionList: state.auctionList.concat(action.payload)
      };
    case ActionTypes.TOGGLE_AUCTION_SUCCESS:
      const auctionIndex = state.auctionList.findIndex((auction: Auction) => auction.id === action.payload.id);
      const updatedAuction: Auction = {
        ...state.auctionList[auctionIndex],
        completed: !state.auctionList[auctionIndex].completed
      };
      const newAuctionList = R.clone(state.auctionList);
      newAuctionList[auctionIndex] = updatedAuction;
      return {
        ...state,
        auctionList: newAuctionList
      };
    default:
      return state;
  }
}
