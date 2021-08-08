export interface ISuggestionsProps {
  id: string;
  photos: Array<string> | string;
  title: string;
  price: number;
}

export interface ISuggestionsComponent {
  id: string;
  title: string;
  price: number;
  image: string;
  onError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}
