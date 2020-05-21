import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './auction.reducers';

export const getAuctionState = createFeatureSelector<State>('auction');

export const selectTodoList = createSelector(
  getAuctionState, 
  state => state ? state.auctionList : [] 
);
