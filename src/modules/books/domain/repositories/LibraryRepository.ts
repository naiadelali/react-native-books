import { BookEntity } from "../Domain";

export interface LibraryRepository {
    /**
    * Lists books with pagination.
    * 
    * @param page The page number.
    * @returns A Promise that resolves to an array of books.
    */
    listBooks(page: number): Promise<BookEntity[]>;
  }