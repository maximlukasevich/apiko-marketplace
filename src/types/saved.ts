export enum SavedActionTypes {
  FETCH_SAVED = 'FETCH_SAVED',
  FETCH_SAVED_SUCCESS = 'FETCH_SAVED_SUCCESS',
}

export type TAction = IFetchProductsAction | IFetchProductsSuccessAction;

export interface IInitialState {
  isLoading: boolean;
  saved: Array<ISaved | string>;
}

interface ISaved {
  id: string;
  ownerId: string;
  title: string;
  description: string | null;
  location: string;
  price: 0;
  createdAt: 0;
  updatedAt: number | null;
  saved: boolean;
}

interface IFetchProductsAction {
  type: SavedActionTypes.FETCH_SAVED;
}

interface IFetchProductsSuccessAction {
  type: SavedActionTypes.FETCH_SAVED_SUCCESS;
  payload: Array<ISaved>;
}