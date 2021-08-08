export enum SearchRecentsActionTypes {
  ADD_RECENT = 'ADD_RECENT',
  CLEAR_RECENTS = 'CLEAR_RECENTS',
}

export type SearchRecentsActionCreatorsTypes = IAddRecent | IClearRecent;

export interface SearchRecentsInitialState {
  recents: Array<string>;
}

interface IAddRecent {
  type: SearchRecentsActionTypes.ADD_RECENT;
  payload: string;
}

interface IClearRecent {
  type: SearchRecentsActionTypes.CLEAR_RECENTS;
}
