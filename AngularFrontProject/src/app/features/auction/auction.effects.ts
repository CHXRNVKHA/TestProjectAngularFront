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

// Класс эффектов
@Injectable()
export class AuctionEffects {
  constructor(
    private actions$: Actions, // данная переменная представляет из себя поток (observable), в который приходят все экшены, которые появляются в приложении
    private auctionService: AuctionService,
    ) {
  }

  // собственно сам эффект
  @Effect()
    getAuctions$ = this.actions$.pipe( // перебираем все экшены, которые появляются в приложении
      ofType(ActionTypes.GET_AUCTION_LIST), // проверям тип текущего экшена
      switchMap(() => this.auctionService.getAuctions()), // вызываем метод сервиса и ретурним из switchMap результат работы сервиса (observable)
      map((auctions: Auction[]) => new GetAuctionListSuccessAction(auctions)), // мап обернёт экшен в observable и он будет задиспатчен в стор (положим корректнрые данные в стор)
      catchError((err) => of(new GetAuctionListFailureAction())) // отлавливаем ошибку
    );

  @Effect()
  createAuction$ = this.actions$.pipe(
    ofType<CreateAuctionAction>(ActionTypes.CREATE_AUCTION), // ofType возвращает дальше в цепочку экшен
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
