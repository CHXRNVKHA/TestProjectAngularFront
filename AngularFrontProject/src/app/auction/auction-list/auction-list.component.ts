import {Component, Input, OnInit} from '@angular/core';
import {Auction} from '../../_interfaces/auction.interface';

@Component({
  selector: 'app-auction-list-component',
  templateUrl: './auction-list.component.html',
})
export class TodoListComponent implements OnInit {
@Input()
  auctions: Auction[];

  ngOnInit(): void {
    console.log(this.auctions);
  }
}
