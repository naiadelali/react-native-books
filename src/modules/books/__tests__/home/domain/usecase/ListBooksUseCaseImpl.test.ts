import { LibraryRepository, ListBooksUseCaseImpl } from "../../../../domain/Domain";

// Mock do LibraryRepository
class MockLibraryRepository implements LibraryRepository {
    async listBooks(page: number): Promise<BookEntity[]> {
        // Implemente seu mock do listBooks aqui
        return Promise.resolve([]);
    }
}

describe('ListBooksUseCaseImpl', () => {
    let useCase: ListBooksUseCaseImpl;
    let repository: LibraryRepository;

    beforeEach(() => {
        // Crie uma nova instância do MockLibraryRepository antes de cada teste
        repository = new MockLibraryRepository();
        useCase = new ListBooksUseCaseImpl(repository);
    });

    it('should list books', async () => {
        // Implemente seus testes aqui
        // Chame o método execute do caso de uso e verifique os resultados esperados
        const books = await useCase.execute(1);
        expect(books).toEqual([]);
    });
});
