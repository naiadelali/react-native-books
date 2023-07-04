export interface BookEntity {
  id: string;
  title: string;
  author: string;
  cover: string;
  previous: number | null;
  next: number | null;
  //fake values
  totalPages: number;
  edition: number;
  publisher: string;
}
