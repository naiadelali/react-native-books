import { BookModel } from "../model/BookModel";


export interface LibraryDatasource {
  /**
    * Lists books with pagination.
    * 
    * @param page The page number.
    * @returns A Promise that resolves to an array of books.
    */
  listBooks(page: number): Promise<BookModel[]>;
}