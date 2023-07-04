import { BookEntity } from "../Domain";
import { LibraryRepository } from "../repositories/LibraryRepository";
import { IListBooksUseCase } from "./IListBooksUseCase";

export class ListBooksUseCaseImpl implements IListBooksUseCase {
  private repository: LibraryRepository;

  constructor(repository: LibraryRepository) {
    this.repository = repository;
  }

  async execute(page: number): Promise<BookEntity[]> {
    return this.repository.listBooks(page);
  }
}
