import * as fromAuction from '../features/auction/auction.reducers';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';

// задаём интерфейс коренного стэйта
export interface State {
  auction: fromAuction.State;
}

// инициализируем коренной стейт
export const reducers: ActionReducerMap<State> = {
  auction: fromAuction.reducer
};

// функция логгинга в консоль экшенов и стэйта
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

const loggingMetaReducer: MetaReducer<State, any> = !environment.production
  ? logger
  : null;

// добавляем к стэйту мидлвар функции
export const metaReducers: Array<MetaReducer<State, any>> = loggingMetaReducer ? [loggingMetaReducer] : [];
