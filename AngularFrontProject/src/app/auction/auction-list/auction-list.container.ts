import {Component, OnInit} from '@angular/core';
//import {State} from '../../../features/todo/todo.reducers';
//import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Auction} from '../../_interfaces/auction.interface';
//import {selectTodoList} from '../../../features/todo/todo.selectors';
//import {GetTodoListAction} from '../../../features/todo/todo.actions';

@Component({
  selector: 'app-auction-list',
  template: `<app-auction-list-component
    [auctions]="auctions$ | async"
  ></app-auction-list-component>`
})
export class AuctionListContainerComponent implements OnInit {
  //public todos$: Observable<Auction[]> = this.store.pipe(select(selectTodoList)); 

  //constructor(private store: Store<State>) {
  //}

  ngOnInit(): void {
  //  this.store.dispatch(new GetTodoListAction());
  }
}
