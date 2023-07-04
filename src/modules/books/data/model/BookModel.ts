export interface BookModel {
  id: string;
  title: string;
  author: string;
  cover: string;
  previous: number | null;
  next: number | null;
}
