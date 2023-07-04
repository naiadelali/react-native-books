import { BookEntity, LibraryRepository, ListBooksUseCaseImpl } from "../../../../domain/Domain";

// Mock do LibraryDatasource
class MockLibraryRepository implements LibraryRepository {
    async listBooks(page: number): Promise<BookEntity[]> {
        // Simule a lista de livros de acordo com o número da página
        const books: BookEntity[] = [];

        if (page === 1) {
            books.push({
                id: '1',
                title: 'Livro 1',
                author: 'Autor 1',
            });
            books.push({
                id: '2',
                title: 'Livro 2',
                author: 'Autor 2',
            });
        } else if (page === 2) {
            books.push({
                id: '3',
                title: 'Livro 3',
                author: 'Autor 3',
            });
            books.push({
                id: '4',
                title: 'Livro 4',
                author: 'Autor 4',
            });
        }

        return Promise.resolve(books);
    }
}

describe('ListBooksUseCaseImpl', () => {
    let useCase: ListBooksUseCaseImpl;
    let repository: LibraryRepository;

    beforeEach(() => {

        repository = new MockLibraryRepository();
        useCase = new ListBooksUseCaseImpl(repository);
    });

    it('should list books', async () => {
        const page = 1;

        const result = await useCase.execute(page);

        expect(result).toHaveLength(2);
        expect(result[0].id).toEqual('1');
        expect(result[0].title).toEqual('Livro 1');
        expect(result[0].author).toEqual('Autor 1');
        expect(result[1].id).toEqual('2');
        expect(result[1].title).toEqual('Livro 2');
        expect(result[1].author).toEqual('Autor 2');
    });
});