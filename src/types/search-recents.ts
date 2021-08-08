export enum SearchRecentsActionTypes {
  ADD_RECENT = 'ADD_RECENT',
  CLEAR_RECENTS = 'CLEAR_RECENTS',
}

export type SearchRecentsActionCreatorsTypes = IAddRecentAction | 
                                               IClearRecentAction;

export interface SearchRecentsInitialState {
  recents: Array<string>;
}

interface IAddRecentAction {
  type: SearchRecentsActionTypes.ADD_RECENT;
  payload: string;
}

interface IClearRecentAction {
  type: SearchRecentsActionTypes.CLEAR_RECENTS;
}