import { BookEntity, LibraryRepository } from "../../domain/Domain";
import { LibraryDatasource } from "../Data";

export class LibraryRepositoryImpl implements LibraryRepository {
  private datasource: LibraryDatasource;

  constructor(datasource: LibraryDatasource) {
    this.datasource = datasource;
  }

  async listBooks(page: number): Promise<BookEntity[]> {
    const bookModels = await this.datasource.listBooks(page);
    const bookEntities: BookEntity[] = bookModels.map((bookModel) => ({
      id: bookModel.id,
      title: bookModel.title,
      author: bookModel.author,
      cover: bookModel.cover,
      previous: bookModel.previous,
      next: bookModel.next,
      totalPages: 150,
      edition: 2020,
      publisher: "Editora Loyola",
    }));
    return bookEntities;
  }
}
