export interface IHeaderSearchSuggestionsProps {
  id: string;
  photos: Array<string> | string;
  title: string;
  price: number;
}

export interface IHeaderSearchSuggestionsComponentProps {
  id: string;
  title: string;
  price: number;
  image: string;
  onError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}