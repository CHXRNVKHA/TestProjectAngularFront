import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { Auction } from '../_interfaces/auction.interface'
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { AuctionService } from '../features/auction/auction.service'


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    auctions: Auction[];

    constructor(private auctionService: AuctionService) { }

    ngOnInit() {
        this.loading = true;
        console.log(this.auctionService.getAuctions());
        this.auctionService.getAuctions().pipe(first()).subscribe(auctions => {
            this.loading = false;
            this.auctions = auctions;
        });
    }
}
