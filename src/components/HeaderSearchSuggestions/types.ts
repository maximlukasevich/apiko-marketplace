export interface IHeaderSearchSuggestionsProps {
  photos: Array<string> | string;
  title: string;
  price: number;
}

export interface IHeaderSearchSuggestionsComponentProps {
  image: string;
  title: string;
  price: number;
  onError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}