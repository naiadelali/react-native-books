// Test
import nock from "nock";
import { LibraryDatasourceImpl } from "../../../../infra/remote/LibraryDatasourceImpl";

describe("LibraryDatasourceImpl", () => {
  let datasource: LibraryDatasourceImpl;

  beforeEach(() => {
    datasource = new LibraryDatasourceImpl();
  });

  it("should return books when listBooks is called", async () => {
    const mockBooks = [
      {
        id: 1,
        title: "Mock Book 1",
        authors: [{ name: "Mock Author 1" }],
      },
      {
        id: 2,
        title: "Mock Book 2",
        authors: [{ name: "Mock Author 2" }],
      },
    ];

    nock("https://gutendex.com")
      .get("/books")
      .query({ page: 1 })
      .reply(200, { results: mockBooks });

    const books = await datasource.listBooks(1);

    expect(books.length).toBe(2);
    expect(books[0].title).toBe("Mock Book 1");
    expect(books[1].title).toBe("Mock Book 2");
  });
});
