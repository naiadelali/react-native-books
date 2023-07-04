import { BookEntity } from "../Domain";

export interface IListBooksUseCase {
    execute(page: number): Promise<BookEntity[]>;
}
