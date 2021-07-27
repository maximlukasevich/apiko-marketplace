export interface IRecentsProps {
  recents: Array<string>;
}

export interface IRecentsComponentProps {
  recents: Array<string>;
  onClearAllClick: () => void;
}